import { ref, reactive } from 'vue'
import { mockUsers } from '~/utils/mockData'
import { useCookie } from '#app'

export function useAuth() {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref(null)
  
  // ใช้ useCookie แทน localStorage
  const userCookie = useCookie('xbet_user', {
    maxAge: 60 * 60 * 24 * 7, // 1 สัปดาห์
    secure: process.env.NODE_ENV === 'production'
  })

  const login = async (credentials) => {
    isLoading.value = true
    error.value = null
    
    try {
      // จำลองการเรียก API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // ค้นหาผู้ใช้จากข้อมูลจำลอง
      const foundUser = mockUsers.find(u => 
        (u.username === credentials.username || u.phone === credentials.username) && 
        u.password === credentials.password
      )
      
      if (!foundUser) {
        throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      }
      
      // สร้างข้อมูลผู้ใช้ที่จะส่งกลับ (ไม่รวมรหัสผ่าน)
      const userData = {
        id: foundUser.id,
        username: foundUser.username,
        phone: foundUser.phone,
        email: foundUser.email,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        nickname: foundUser.nickname,
        balance: foundUser.balance,
        status: foundUser.status
      }
      
      user.value = userData
      isAuthenticated.value = true
      
      // บันทึกข้อมูลใน cookie
      if (process.client) {
        userCookie.value = JSON.stringify(userData)
      }
      
      return userData
    } catch (err) {
      error.value = err.message || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    if (process.client) {
      userCookie.value = null
    }
  }

  const checkAuth = () => {
    if (process.client && userCookie.value) {
      try {
        user.value = JSON.parse(userCookie.value)
        isAuthenticated.value = true
      } catch (e) {
        userCookie.value = null
      }
    }
  }

  // เรียกตรวจสอบสถานะการล็อกอินเมื่อเริ่มต้น
  checkAuth()

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    checkAuth
  }
}