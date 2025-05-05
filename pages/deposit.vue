<template>
  <div class="min-h-screen bg-pink-50">
    <!-- Header -->
    <AppHeader />

    <!-- Main Content -->
    <div class="container mx-auto p-4 max-w-lg">
      <!-- Back Button -->
      <div class="mb-6">
        <button class="flex items-center text-pink-600 bg-white rounded-full px-4 py-2 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 mr-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <span>หน้าหลัก</span>
        </button>
      </div>

      <!-- Deposit Card -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <!-- Title -->
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold text-red-500">เติมเงิน</h1>
          <p class="text-gray-500 text-sm">เลือกวิธีการเติมเงินเข้าบัญชีของคุณ</p>
        </div>

        <DepositTabs v-model="activeTab" />
        <component :is="activeComponent" />

      </div>

      <!-- Transaction History -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-red-500 mb-2">ประวัติการฝากเงิน</h2>
        <p class="text-gray-500 text-sm mb-4">ประวัติการฝากเงินล่าสุดของคุณ</p>
        
        <!-- History Tabs -->
        <div class="flex mb-6 border rounded-lg overflow-hidden">
          <button 
            @click="historyTab = 'latest'"
            class="flex-1 py-3 text-center"
            :class="historyTab === 'latest' ? 'bg-gray-100 font-medium' : 'bg-white text-gray-500'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 inline mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            ล่าสุด
          </button>
          <button 
            @click="historyTab = 'all'"
            class="flex-1 py-3 text-center"
            :class="historyTab === 'all' ? 'bg-gray-100 font-medium' : 'bg-white text-gray-500'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 inline mr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            ทั้งหมด
          </button>
        </div>
        
        <!-- Transaction List -->
        <div class="space-y-4">
          <div v-for="(transaction, index) in filteredTransactions" :key="index" class="flex items-center">
            <div class="bg-green-100 rounded-full p-3 mr-4">
              <svg v-if="transaction.method === 'กสิกรไทย' || transaction.method === 'ไทยพาณิชย์'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <svg v-else-if="transaction.method === 'พร้อมเพย์'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <svg v-else-if="transaction.method === 'QR Code'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
              </svg>
              <svg v-else-if="transaction.method === 'บัตรของขวัญ'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
            </div>
            <div class="flex-1">
              <div class="font-medium">฿ {{ transaction.amount }}</div>
              <div class="text-gray-500 text-sm flex items-center">
                {{ transaction.date }} • {{ transaction.method }}
              </div>
            </div>
            <div class="text-green-500 font-medium">สำเร็จ</div>
          </div>
        </div>
        
        <!-- View All Button -->
        <div class="mt-6 text-center">
          <button class="text-pink-500 border border-pink-300 rounded-full px-6 py-2 inline-flex items-center">
            ดูทั้งหมด
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
        <!-- Bottom Navigation -->
        <AppFooter />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Swal from 'sweetalert2'
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import DepositTabs from '~/components/Deposit/DepositTabs.vue'
import DepositBank from '~/components/Deposit/DepositBank.vue'
import DepositPromptPay from '~/components/Deposit/DepositPromptPay.vue'
import DepositQRCode from '~/components/Deposit/DepositQRCode.vue'
import DepositGiftCard from '~/components/Deposit/DepositGiftCard.vue'
import DepositCard from '~/components/Deposit/DepositCard.vue'

const activeTab = ref('bank')

const componentMap = {
  bank: DepositBank,
  promptpay: DepositPromptPay,
  qrcode: DepositQRCode,
  giftcard: DepositGiftCard,
  card: DepositCard
}

const activeComponent = computed(() => componentMap[activeTab.value])

const tabs = [
  { id: 'bank', name: 'ธนาคาร' },
  { id: 'promptpay', name: 'พร้อมเพย์' },
  { id: 'qrcode', name: 'QR Code' },
  { id: 'giftcard', name: 'กิฟการ์ด' },
  { id: 'payment', name: 'Payment' }
];

// const activeTab = ref('bank');
const historyTab = ref('latest');
const selectedBank = ref('kasikorn');
const amount = ref('');

// Credit card form
const cardNumber = ref('');
const cardExpiry = ref('');
const cardCVV = ref('');
const cardName = ref('');
const saveCard = ref(false);

// Gift card form
const giftCardCode = ref('');
const giftCardPin = ref('');

// Banks
const banks = [
  { id: 'kasikorn', name: 'กสิกรไทย' },
  { id: 'krungthai', name: 'กรุงไทย' },
  { id: 'scb', name: 'ไทยพาณิชย์' },
  { id: 'bangkok', name: 'กรุงเทพ' }
];

// Bank accounts
const bankAccounts = [
  { 
    id: 1, 
    name: 'กสิกรไทย', 
    company: 'บริษัท เอ็กซ์เบทแบนด์ จำกัด', 
    accountNumber: '123-4-56789-0' 
  },
  { 
    id: 2, 
    name: 'ไทยพาณิชย์', 
    company: 'บริษัท เอ็กซ์เบทแบนด์ จำกัด', 
    accountNumber: '987-6-54321-0' 
  }
];

// Transaction history
const transactions = [
  { 
    amount: '1,000.00', 
    date: '18/04/2025 14:30', 
    method: 'กสิกรไทย', 
    status: 'success' 
  },
  { 
    amount: '500.00', 
    date: '17/04/2025 10:15', 
    method: 'พร้อมเพย์', 
    status: 'success' 
  },
  { 
    amount: '300.00', 
    date: '16/04/2025 18:22', 
    method: 'QR Code', 
    status: 'success' 
  },
  { 
    amount: '2,000.00', 
    date: '15/04/2025 09:45', 
    method: 'บัตรเครดิต', 
    status: 'success' 
  },
  { 
    amount: '1,500.00', 
    date: '14/04/2025 16:10', 
    method: 'ไทยพาณิชย์', 
    status: 'success' 
  },
  { 
    amount: '800.00', 
    date: '13/04/2025 11:30', 
    method: 'บัตรของขวัญ', 
    status: 'success' 
  }
];

// Filtered transactions based on history tab
const filteredTransactions = computed(() => {
  if (historyTab.value === 'latest') {
    return transactions.slice(0, 3);
  }
  return transactions;
});

// Methods
const copyToClipboard = (text) => {
  if (process.client) {
    navigator.clipboard.writeText(text);
    alert('คัดลอกข้อมูลแล้ว');
  }
};

const submitDeposit = (method) => {
  if (!amount.value || Number(amount.value) < 100) {
    Swal.fire({
      icon: 'warning',
      title: 'ยอดเงินไม่พอ',
      text: 'กรุณาระบุจำนวนเงินขั้นต่ำ 100 บาท'
    });
    return;
  }

  if (method === 'giftcard' && !giftCardCode.value) {
    Swal.fire({
      icon: 'warning',
      title: 'กรุณากรอก',
      text: 'กรุณากรอกรหัสบัตรของขวัญ'
    });
    return;
  }

  if (method === 'payment' && (!cardNumber.value || !cardExpiry.value || !cardCVV.value || !cardName.value)) {
    Swal.fire({
      icon: 'warning',
      title: 'ข้อมูลไม่ครบ',
      text: 'กรุณากรอกข้อมูลบัตรให้ครบถ้วน'
    });
    return;
  }

  let methodName = {
    bank: 'ธนาคาร',
    promptpay: 'พร้อมเพย์',
    qrcode: 'QR Code',
    giftcard: 'บัตรของขวัญ',
    payment: 'บัตรเครดิต/เดบิต'
  }[method];

  Swal.fire({
    icon: 'success',
    title: 'ยืนยันการฝากเงิน',
    text: `จำนวน ${amount.value} บาท ผ่าน ${methodName}`,
    confirmButtonText: 'ตกลง'
  });

  const newTransaction = {
    amount: Number(amount.value).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
    date: new Date().toLocaleString('th-TH', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    method: methodName,
    status: 'success'
  };

  transactions.unshift(newTransaction);

  // Reset form
  amount.value = '';
  if (method === 'giftcard') {
    giftCardCode.value = '';
    giftCardPin.value = '';
  } else if (method === 'payment') {
    cardNumber.value = '';
    cardExpiry.value = '';
    cardCVV.value = '';
    cardName.value = '';
    saveCard.value = false;
  }
};
const downloadQR = () => {
  alert('กำลังดาวน์โหลด QR Code');
};

const shareQR = () => {
  alert('กำลังแชร์ QR Code');
};
</script>

<style scoped>
/* Custom scrollbar for tabs */
::-webkit-scrollbar {
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #e0e0e0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #d0d0d0;
}

/* Remove number input arrows */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>