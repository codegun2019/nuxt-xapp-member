<template>
  <div class="balance-card">
    <div class="balance-header">
      <span class="balance-title">Current Balance</span>
      <div class="user-phone">
        <span>{{ userPhone }}</span>
        <button @click="copyToClipboard(userPhone)" class="copy-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="balance-amount">
      <span class="currency">฿</span>
      <span class="amount">{{ formatAmount(balance) }}</span>
      <span class="decimals">.00</span>
    </div>
    
    <div class="user-name">
      <span>{{ userName }}</span>
      <button @click="copyToClipboard(userName)" class="copy-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
    </div>
    
    <div class="action-buttons">
      <button class="action-button" @click="$emit('deposit')">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <span>Deposit</span>
      </button>
      
      <button class="action-button" @click="$emit('withdraw')">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <span>Withdraw</span>
      </button>
      
      <button class="action-button" @click="$emit('free')">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
          </svg>
        </div>
        <span>Free</span>
      </button>
      
      <button class="action-button" @click="$emit('diamond')">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <span>Diamond</span>
      </button>
      
      <button class="action-button" @click="$emit('reload')">
        <div class="button-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 4v6h-6"></path>
            <path d="M1 20v-6h6"></path>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
            <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
          </svg>
        </div>
        <span>Reload</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  balance: {
    type: Number,
    default: 126.49
  },
  userPhone: {
    type: String,
    default: '089-123-4567'
  },
  userName: {
    type: String,
    default: 'สมชาย_รักเกม'
  }
})

const emit = defineEmits(['deposit', 'withdraw', 'free', 'diamond', 'reload'])

const formatAmount = (amount) => {
  return amount.toString().split('.')[0]
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      // You could add a toast notification here
      console.log('Copied to clipboard')
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}
</script>

<style scoped>
.balance-card {
  background: linear-gradient(135deg, #F06292 0%, #E91E63 100%);
  border-radius: 16px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 16px rgba(233, 30, 99, 0.2);
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}

.balance-card::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(233, 30, 99, 0.1));
  border-radius: 18px;
  z-index: -1;
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.balance-card:hover::after {
  opacity: 1;
}

.balance-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.balance-title {
  font-size: 16px;
  opacity: 0.9;
}

.user-phone {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.copy-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  margin-left: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.balance-amount {
  font-size: 36px;
  font-weight: bold;
  margin: 10px 0;
  display: flex;
  align-items: baseline;
}

.currency {
  font-size: 36px;
  margin-right: 4px;
}

.amount {
  font-size: 42px;
}

.decimals {
  font-size: 24px;
  opacity: 0.7;
}

.user-name {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  padding: 0;
  margin-bottom: 4px;
}

.action-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.action-button:active {
  transform: scale(0.95);
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.action-button span {
  font-size: 12px;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .balance-amount {
    font-size: 32px;
  }
  
  .currency {
    font-size: 32px;
  }
  
  .amount {
    font-size: 36px;
  }
  
  .decimals {
    font-size: 20px;
  }
}
</style>