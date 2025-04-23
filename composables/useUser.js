export const useUser = () => {
  // Mock user data
  const users = {
    1: {
      id: 1,
      username: 'user123',
      firstName: 'สมชาย',
      lastName: 'ใจดี',
      nickname: 'ชาย',
      email: 'somchai@example.com',
      phone: '0812345678',
      balance: 15000,
      registeredDate: '2023-01-15T10:30:00',
      referralSource: 'friend'
    },
    2: {
      id: 2,
      username: 'gamer555',
      firstName: 'วิชัย',
      lastName: 'เกมเมอร์',
      nickname: 'วิช',
      email: 'wichai@example.com',
      phone: '0898765432',
      balance: 8500,
      registeredDate: '2023-03-22T14:45:00',
      referralSource: 'facebook'
    },
    3: {
      id: 3,
      username: 'lucky888',
      firstName: 'สมหญิง',
      lastName: 'มีโชค',
      nickname: 'หญิง',
      email: 'somying@example.com',
      phone: '0654321987',
      balance: 25000,
      registeredDate: '2023-02-10T09:15:00',
      referralSource: 'instagram'
    }
  }

  // Mock bank accounts
  const bankAccounts = {
    1: [
      {
        id: 1,
        userId: 1,
        bankId: 'kbank',
        bankName: 'กสิกรไทย',
        bankIcon: '🏦',
        bankColor: '#138f2d',
        accountName: 'สมชาย ใจดี',
        accountNumber: '1234567890',
        isDefault: true
      }
    ],
    2: [
      {
        id: 2,
        userId: 2,
        bankId: 'scb',
        bankName: 'ไทยพาณิชย์',
        bankIcon: '🏦',
        bankColor: '#4e2e7f',
        accountName: 'วิชัย เกมเมอร์',
        accountNumber: '0987654321',
        isDefault: true
      }
    ],
    3: [
      {
        id: 3,
        userId: 3,
        bankId: 'bbl',
        bankName: 'กรุงเทพ',
        bankIcon: '🏦',
        bankColor: '#1e4dd1',
        accountName: 'สมหญิง มีโชค',
        accountNumber: '5678901234',
        isDefault: true
      }
    ]
  }

  // Mock transactions
  const transactions = {
    1: [
      {
        id: 1,
        userId: 1,
        type: 'deposit',
        amount: 5000,
        date: '2023-05-10T14:30:00'
      },
      {
        id: 2,
        userId: 1,
        type: 'withdraw',
        amount: 2000,
        date: '2023-05-15T16:45:00'
      },
      {
        id: 3,
        userId: 1,
        type: 'deposit',
        amount: 3000,
        date: '2023-05-20T10:15:00'
      }
    ],
    2: [
      {
        id: 4,
        userId: 2,
        type: 'deposit',
        amount: 10000,
        date: '2023-05-05T09:30:00'
      },
      {
        id: 5,
        userId: 2,
        type: 'withdraw',
        amount: 5000,
        date: '2023-05-12T11:20:00'
      }
    ],
    3: [
      {
        id: 6,
        userId: 3,
        type: 'deposit',
        amount: 20000,
        date: '2023-05-01T13:10:00'
      },
      {
        id: 7,
        userId: 3,
        type: 'withdraw',
        amount: 8000,
        date: '2023-05-08T15:30:00'
      },
      {
        id: 8,
        userId: 3,
        type: 'deposit',
        amount: 15000,
        date: '2023-05-18T10:45:00'
      },
      {
        id: 9,
        userId: 3,
        type: 'withdraw',
        amount: 12000,
        date: '2023-05-25T14:20:00'
      }
    ]
  }

  // Mock user ID counter for new registrations
  let nextUserId = 4
  let nextBankAccountId = 4
  let nextTransactionId = 10

  // Get user details
  const getUserDetails = async (userId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (users[userId]) {
      return { ...users[userId] }
    }
    
    throw new Error('User not found')
  }

  // Get bank accounts
  const getBankAccounts = async (userId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (bankAccounts[userId]) {
      return [...bankAccounts[userId]]
    }
    
    return []
  }

  // Get transactions
  const getTransactions = async (userId) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    if (transactions[userId]) {
      return [...transactions[userId]].sort((a, b) => new Date(b.date) - new Date(a.date))
    }
    
    return []
  }

  // Add bank account
  const addBankAccount = async (userId, accountData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (!users[userId]) {
      throw new Error('User not found')
    }
    
    const newAccount = {
      id: nextBankAccountId++,
      userId,
      bankId: accountData.bankId,
      bankName: accountData.bankName,
      bankIcon: '🏦',
      bankColor: getRandomBankColor(),
      accountName: accountData.accountName,
      accountNumber: accountData.accountNumber,
      isDefault: accountData.isDefault || false
    }
    
    if (!bankAccounts[userId]) {
      bankAccounts[userId] = []
    }
    
    // If this is the default account, remove default from others
    if (newAccount.isDefault) {
      bankAccounts[userId].forEach(account => {
        account.isDefault = false
      })
    }
    
    bankAccounts[userId].push(newAccount)
    return newAccount.id
  }

  // Update user details
  const updateUserDetails = async (userId, userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    if (!users[userId]) {
      throw new Error('User not found')
    }
    
    users[userId] = {
      ...users[userId],
      ...userData
    }
    
    return true
  }

  // Create a new user (for registration)
  const createUser = async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const userId = nextUserId++
    
    users[userId] = {
      id: userId,
      username: userData.username,
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      nickname: userData.nickname || '',
      email: userData.email || '',
      phone: userData.phone || '',
      balance: 0,
      registeredDate: new Date().toISOString(),
      referralSource: userData.referralSource || ''
    }
    
    // Initialize empty arrays for new user
    bankAccounts[userId] = []
    transactions[userId] = []
    
    return userId
  }

  // Helper function to generate random bank color
  const getRandomBankColor = () => {
    const colors = ['#138f2d', '#4e2e7f', '#1e4dd1', '#d11e1e', '#d1841e', '#8f138f']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return {
    getUserDetails,
    getBankAccounts,
    getTransactions,
    addBankAccount,
    updateUserDetails,
    createUser
  }
}