import { ref } from 'vue'

export const useAuth = () => {
  // Mock user credentials
  const userCredentials = {
    'user123': 'password123',
    'gamer555': 'gamer555pwd',
    'lucky888': 'lucky888pwd'
  }

  // Mock user data
  const mockUsers = {
    'user123': { id: 1, username: 'user123' },
    'gamer555': { id: 2, username: 'gamer555' },
    'lucky888': { id: 3, username: 'lucky888' }
  }

  // State
  const user = ref(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const error = ref(null)

  // Check if there's a stored user in localStorage on client-side
  if (process.client) {
    try {
      const storedUser = localStorage.getItem('xbet_user')
      if (storedUser) {
        user.value = JSON.parse(storedUser)
        isAuthenticated.value = true
      }
    } catch (err) {
      console.error('Error reading from localStorage:', err)
    }
  }

  // Login function
  const login = async ({ username, password, rememberMe = false }) => {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Check credentials
      if (!userCredentials[username] || userCredentials[username] !== password) {
        throw new Error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      }

      // Set user data
      user.value = mockUsers[username]
      isAuthenticated.value = true

      // Store in localStorage if rememberMe is true
      if (rememberMe && process.client) {
        localStorage.setItem('xbet_user', JSON.stringify(user.value))
      }

      return user.value
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  // Logout function
  const logout = () => {
    user.value = null
    isAuthenticated.value = false

    // Remove from localStorage
    if (process.client) {
      localStorage.removeItem('xbet_user')
    }
  }

  // Register function
  const register = async ({ username, password }) => {
    isLoading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Check if username already exists
      if (userCredentials[username]) {
        throw new Error('ชื่อผู้ใช้นี้มีอยู่ในระบบแล้ว')
      }

      // Generate new user ID (would be handled by backend in real app)
      const newUserId = Object.keys(mockUsers).length + 1

      // Add new user to mock data
      userCredentials[username] = password
      mockUsers[username] = { id: newUserId, username }

      return newUserId
    } catch (err) {
      error.value = err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register
  }
}