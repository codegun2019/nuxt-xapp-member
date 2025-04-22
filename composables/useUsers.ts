import { ref, computed } from 'vue'
import { mockUsers, supportedBanks } from '~/utils/mockData'
import { useAuth } from '~/composables/useAuth'

export function useUser() {
  const { user: currentUser } = useAuth()
  const isLoading = ref(false)
  const error = ref(null)
  
  // ดึงข้อมูลผู้ใช้แบบเต็ม
  const getUserDetails = async (userId) => {
    isLoading.value = true
    error.value = null
    
    try {
      // จำลองการเรียก API
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const user = mockUsers.find(u => u.id === userId)
      
      if (!user) {
        throw new Error('ไม่พบข้อมูลผู้ใช้')
      }
      
      return {
        ...user,
        password: undefined // ไม่ส่งรหัสผ่านกลับไป
      }
    } catch (err) {
      error.value = err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  // ดึงข้อมูลบัญชีธนาคาร
  const getBankAccounts = async (userId) => {
    isLoading.value = true
    error.value = null
    
    try {
      // จำลองการเรียก API
      await new Promise(resolve => setTimeout(resolve, 600))
      
      const user = mockUsers.find(u => u.id === userId)
      
      if (!user) {
        throw new Error('ไม่พบข้อมูลผู้ใช้')
      }
      
      return user.bankAccounts.map(account => {
        const bankInfo = supportedBanks.find(bank => bank.code === account.bankCode) || {}
        return {
          ...account,
          bankColor: bankInfo.color,
          bankIcon: bankInfo.icon
        }
      })
    } catch (err) {
      error.value = err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูลบัญชีธนาคาร'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  // ดึงประวัติการทำธุรกรรม
  const getTransactions = async (userId, params = {}) => {
    isLoading.value = true
    error.value = null
    
    try {
      // จำลองการเรียก API
      await new Promise(resolve => setTimeout(resolve, 700))
      
      const user = mockUsers.find(u => u.id === userId)
      
      if (!user) {
        throw new Error('ไม่พบข้อมูลผู้ใช้')
      }
      
      let transactions = [...user.transactions]
      
      // จำลองการกรอง
      if (params.type) {
        transactions = transactions.filter(t => t.type === params.type)
      }
      
      // จำลองการเรียงลำดับ
      transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
      
      return transactions
    } catch (err) {
      error.value = err.message || 'เกิดข้อผิดพลาดในการดึงประวัติการทำธุรกรรม'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  // ดึงประวัติการเล่นเกม
  const getGameHistory = async (userId) => {
    isLoading.value = true
    error.value = null
    
    try {
      // จำลองการเรียก API
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const user = mockUsers.find(u => u.id === userId)
      
      if (!user) {
        throw new Error('ไม่พบข้อมูลผู้ใช้')
      }
      
      // จำลองการเรียงลำดับ
      return [...user.gameHistory].sort((a, b) => new Date(b.date) - new Date(a.date))
    } catch (err) {
      error.value = err.message || 'เกิดข้อผิดพลาดในการดึงประวัติการเล่นเกม'
      throw err
    } finally {
      isLoading.value = false
    }
  }
  
  // ดึงข้อมูลธนาคารที่รองรับ
  const getSupportedBanks = () => {
    return supportedBanks
  }
  
  return {
    currentUser,
    isLoading,
    error,
    getUserDetails,
    getBankAccounts,
    getTransactions,
    getGameHistory,
    getSupportedBanks
  }
}