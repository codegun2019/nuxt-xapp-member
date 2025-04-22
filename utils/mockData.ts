// ข้อมูลผู้ใช้จำลอง
export const mockUsers = [
  {
    id: 1,
    username: 'user123',
    password: 'password123', // ในระบบจริงควรเก็บเป็น hash
    phone: '0891234567',
    email: 'user123@example.com',
    firstName: 'สมชาย',
    lastName: 'ใจดี',
    nickname: 'ชาย',
    birthDate: '1990-05-15',
    address: '123/45 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
    idCard: '1100800123456',
    registeredDate: '2023-01-15',
    lastLogin: '2023-04-23T08:30:45',
    status: 'active',
    balance: 1245.75,
    bankAccounts: [
      {
        id: 101,
        bankName: 'กสิกรไทย',
        bankCode: 'KBANK',
        accountNumber: '1234567890',
        accountName: 'สมชาย ใจดี',
        isDefault: true
      }
    ],
    transactions: [
      {
        id: 1001,
        type: 'deposit',
        amount: 500,
        status: 'completed',
        date: '2023-04-20T14:30:00',
        bankAccount: '1234567890',
        bankName: 'กสิกรไทย'
      },
      {
        id: 1002,
        type: 'withdraw',
        amount: 200,
        status: 'completed',
        date: '2023-04-22T16:45:00',
        bankAccount: '1234567890',
        bankName: 'กสิกรไทย'
      }
    ],
    gameHistory: [
      {
        id: 2001,
        gameName: 'สล็อต Lucky Dragon',
        betAmount: 50,
        winAmount: 150,
        date: '2023-04-21T20:15:30'
      },
      {
        id: 2002,
        gameName: 'รูเล็ต',
        betAmount: 100,
        winAmount: 0,
        date: '2023-04-22T21:30:45'
      }
    ]
  },
  {
    id: 2,
    username: 'gamer555',
    password: 'gamer555pwd',
    phone: '0987654321',
    email: 'gamer555@example.com',
    firstName: 'วิชัย',
    lastName: 'รักเกม',
    nickname: 'วิช',
    birthDate: '1995-10-20',
    address: '456 หมู่ 8 ตำบลสันทราย อำเภอเมือง จังหวัดเชียงใหม่ 50210',
    idCard: '1509900123456',
    registeredDate: '2023-02-10',
    lastLogin: '2023-04-22T19:45:30',
    status: 'active',
    balance: 3500.50,
    bankAccounts: [
      {
        id: 201,
        bankName: 'ไทยพาณิชย์',
        bankCode: 'SCB',
        accountNumber: '0987654321',
        accountName: 'วิชัย รักเกม',
        isDefault: true
      },
      {
        id: 202,
        bankName: 'กรุงเทพ',
        bankCode: 'BBL',
        accountNumber: '1122334455',
        accountName: 'วิชัย รักเกม',
        isDefault: false
      }
    ],
    transactions: [
      {
        id: 2001,
        type: 'deposit',
        amount: 1000,
        status: 'completed',
        date: '2023-04-15T10:20:00',
        bankAccount: '0987654321',
        bankName: 'ไทยพาณิชย์'
      },
      {
        id: 2002,
        type: 'deposit',
        amount: 2000,
        status: 'completed',
        date: '2023-04-20T14:30:00',
        bankAccount: '0987654321',
        bankName: 'ไทยพาณิชย์'
      }
    ],
    gameHistory: [
      {
        id: 3001,
        gameName: 'บาคาร่า',
        betAmount: 500,
        winAmount: 950,
        date: '2023-04-21T18:30:00'
      },
      {
        id: 3002,
        gameName: 'สล็อต Fortune Tiger',
        betAmount: 100,
        winAmount: 0,
        date: '2023-04-22T20:15:30'
      }
    ]
  },
  {
    id: 3,
    username: 'lucky888',
    password: 'lucky888pwd',
    phone: '0812345678',
    email: 'lucky888@example.com',
    firstName: 'นภา',
    lastName: 'มีโชค',
    nickname: 'นภา',
    birthDate: '1992-03-25',
    address: '789 ถนนเพชรเกษม แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160',
    idCard: '1100400123456',
    registeredDate: '2023-03-05',
    lastLogin: '2023-04-23T09:15:20',
    status: 'active',
    balance: 8750.25,
    bankAccounts: [
      {
        id: 301,
        bankName: 'กรุงไทย',
        bankCode: 'KTB',
        accountNumber: '6789012345',
        accountName: 'นภา มีโชค',
        isDefault: true
      }
    ],
    transactions: [
      {
        id: 3001,
        type: 'deposit',
        amount: 5000,
        status: 'completed',
        date: '2023-04-10T11:45:00',
        bankAccount: '6789012345',
        bankName: 'กรุงไทย'
      },
      {
        id: 3002,
        type: 'withdraw',
        amount: 1000,
        status: 'completed',
        date: '2023-04-20T16:30:00',
        bankAccount: '6789012345',
        bankName: 'กรุงไทย'
      }
    ],
    gameHistory: [
      {
        id: 4001,
        gameName: 'สล็อต Lucky God',
        betAmount: 200,
        winAmount: 5000,
        date: '2023-04-15T19:45:30'
      },
      {
        id: 4002,
        gameName: 'บาคาร่า',
        betAmount: 1000,
        winAmount: 1900,
        date: '2023-04-22T21:00:15'
      }
    ]
  }
]

// ข้อมูลธนาคารที่รองรับ
export const supportedBanks = [
  { code: 'KBANK', name: 'กสิกรไทย', color: '#138f2d', icon: '🏦' },
  { code: 'SCB', name: 'ไทยพาณิชย์', color: '#4e2e7f', icon: '🏦' },
  { code: 'BBL', name: 'กรุงเทพ', color: '#1e4598', icon: '🏦' },
  { code: 'KTB', name: 'กรุงไทย', color: '#12aaeb', icon: '🏦' },
  { code: 'BAY', name: 'กรุงศรีอยุธยา', color: '#fec43b', icon: '🏦' },
  { code: 'TBANK', name: 'ธนชาต', color: '#fc4f1f', icon: '🏦' },
  { code: 'GSB', name: 'ออมสิน', color: '#eb198d', icon: '🏦' },
  { code: 'TMB', name: 'ทหารไทยธนชาต', color: '#1279be', icon: '🏦' }
]

// ข้อมูลโปรโมชัน
export const promotions = [
  {
    id: 1,
    title: 'โบนัสต้อนรับสมาชิกใหม่ 100%',
    description: 'รับโบนัสสูงสุด 1,000 บาท สำหรับการฝากครั้งแรก',
    image: '/images/promotions/welcome-bonus.jpg',
    startDate: '2023-04-01',
    endDate: '2023-05-31',
    terms: 'ต้องทำเทิร์นโอเวอร์ 5 เท่าของยอดโบนัส'
  },
  {
    id: 2,
    title: 'โบนัสฝากประจำวัน 10%',
    description: 'รับโบนัส 10% ทุกครั้งที่ฝากเงิน สูงสุด 500 บาทต่อวัน',
    image: '/images/promotions/daily-bonus.jpg',
    startDate: '2023-04-01',
    endDate: '2023-06-30',
    terms: 'ต้องทำเทิร์นโอเวอร์ 3 เท่าของยอดโบนัส'
  }
]

// ข้อมูลเกม
export const games = [
  {
    id: 1,
    name: 'Fortune Tiger',
    category: 'slot',
    provider: 'PG Soft',
    image: '/images/games/fortune-tiger.jpg',
    isHot: true,
    isNew: false
  },
  {
    id: 2,
    name: 'Lucky God',
    category: 'slot',
    provider: 'PG Soft',
    image: '/images/games/lucky-god.jpg',
    isHot: true,
    isNew: false
  },
  {
    id: 3,
    name: 'Baccarat',
    category: 'card',
    provider: 'Evolution Gaming',
    image: '/images/games/baccarat.jpg',
    isHot: true,
    isNew: false
  },
  {
    id: 4,
    name: 'Dragon Tiger',
    category: 'card',
    provider: 'Evolution Gaming',
    image: '/images/games/dragon-tiger.jpg',
    isHot: false,
    isNew: true
  }
]