<template>
  <div class="min-h-screen bg-gradient-to-b from-primary-100 to-primary-200 ">
    <!-- Header -->
    <AppHeader />
    <div class="container mx-auto p-4 max-w-lg ">
      <div class="flex items-center justify-between mb-6 ">
        <!-- ปุ่มหน้าหลัก (ซ้าย) -->
        <NuxtLink to="/">
        <button 
          class="flex items-center justify-center rounded-full border border-primary-700 px-4 py-2 text-primary-500 hover:bg-primary-50 transition-colors"
        >
          <span class="mr-1">←</span>
          <span>หน้าหลัก</span>
        </button>
        </NuxtLink>

        <!-- ปุ่มโปรโมชั่น (ขวา) -->
        <button 
          class="flex items-center justify-center rounded-full border border-primary-700 px-4 py-2 text-primary-500 hover:bg-primary-50 transition-colors"
        >
          <h1>โปรโมชั่น</h1>
        </button>
      </div>

      
      <!-- <h1 class="text-4xl font-bold text-primary-500 mb-4">โปรโมชั่น</h1> -->
      
      <!-- Search Bar -->
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-400">🔍</span>
        </div>
        <input 
          type="text" 
          v-model="searchQuery"
          placeholder="ค้นหาโปรโมชั่น" 
          class="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-700"
        >
      </div>
      
      <!-- Category Tabs -->
      <div class="mb-6 flex overflow-x-auto pb-2">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="setActiveCategory(category.id)"
          class="flex-shrink-0 px-8 py-3 rounded-full mr-2 transition-colors"
          :class="activeCategory === category.id ? 'bg-primary-400 text-white font-medium' : 'bg-gray-100 text-gray-600 font-medium'"
        >
          {{ category.name }}
        </button>
      </div>
    
      <!-- Promotion Cards -->
      <div class="pb-20 space-y-6">
        <div v-if="filteredPromotions.length === 0" class="text-center py-10">
          <div class="text-5xl mb-4">😢</div>
          <p class="text-gray-600">ไม่พบโปรโมชั่นที่คุณค้นหา</p>
        </div>
        
        <!-- Promotion Card -->
        <div 
          v-for="promo in filteredPromotions" 
          :key="promo.id" 
          class="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          <div class="relative">
            <img 
              :src="promo.image" 
              :alt="promo.title" 
              class="w-full h-48 object-cover"
            >
            <div 
              class="absolute top-4 right-4 px-3 py-1 rounded-full text-sm"
              :class="getCategoryClass(promo.categoryId)"
            >
              {{ getCategoryName(promo.categoryId) }}
            </div>
          </div>
          
          <div class="p-5">
            <h2 class="text-2xl font-bold text-primary-500 mb-2">{{ promo.title }}</h2>
            
            <div class="flex items-center mb-2">
              <div class="bg-yellow-100 p-1 rounded-lg mr-2">
                <span>{{ promo.icon }}</span>
              </div>
              <span class="text-gray-600">{{ promo.provider }}</span>
              <div class="flex items-center ml-auto text-gray-500">
                <span class="mr-1">🕒</span>
                <span>{{ promo.expiry }}</span>
              </div>
            </div>
            
            <p class="text-gray-600 mb-2">{{ promo.description }}</p>
            <p class="text-xl font-bold text-primary-500 mb-4">{{ promo.amount }}</p>
            
            <div class="flex justify-between">
              <button 
                @click="showDetails(promo)" 
                class="px-6 py-3 border border-primary-700 rounded-full text-primary-500 font-medium hover:bg-pink-50 transition-colors"
              >
                รายละเอียด
              </button>
              <button 
                @click="claimPromotion(promo)" 
                class="px-6 py-3 bg-primary-400 rounded-full text-white font-medium hover:bg-pink-600 transition-colors"
                :disabled="promo.claimed"
                :class="{'opacity-50 cursor-not-allowed': promo.claimed}"
              >
                รับโปรโมชั่น
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating Chat Button -->
    <div class="fixed bottom-6 right-6 bg-white rounded-full p-4 shadow-lg">
      <span class="text-primary-500">💬</span>
    </div>

    <!-- Details Popup -->
    <div v-if="detailsPopup.show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-800">รายละเอียดโปรโมชั่น</h3>
            <button @click="closeDetailsPopup" class="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
          
          <img 
            :src="detailsPopup.promo?.image" 
            :alt="detailsPopup.promo?.title" 
            class="w-full h-40 object-cover rounded-lg mb-4"
          >
          
          <h4 class="text-lg font-bold text-primary-500 mb-2">{{ detailsPopup.promo?.title }}</h4>
          
          <div class="mb-4">
            <div class="flex items-center mb-2">
              <div class="bg-yellow-100 p-1 rounded-lg mr-2">
                <span>{{ detailsPopup.promo?.icon }}</span>
              </div>
              <span class="text-sm text-gray-600">{{ detailsPopup.promo?.provider }}</span>
            </div>
            
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span class="mr-1">🕒</span>
              <span>{{ detailsPopup.promo?.expiry }}</span>
            </div>
          </div>
          
          <div class="space-y-3 mb-4">
            <p class="text-gray-700">{{ detailsPopup.promo?.description }}</p>
            <p class="text-gray-700">{{ detailsPopup.promo?.fullDescription }}</p>
          </div>
          
          <div class="bg-gray-100 p-3 rounded-lg mb-4">
            <h5 class="font-medium text-gray-800 mb-2">เงื่อนไขโปรโมชั่น</h5>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li v-for="(condition, index) in detailsPopup.promo?.conditions" :key="index">
                {{ condition }}
              </li>
            </ul>
          </div>
          
          <button 
            @click="claimPromotion(detailsPopup.promo)" 
            class="w-full py-3 bg-primary-400 rounded-full text-white font-medium hover:bg-pink-600 transition-colors"
            :disabled="detailsPopup.promo?.claimed"
            :class="{'opacity-50 cursor-not-allowed': detailsPopup.promo?.claimed}"
          >
            {{ detailsPopup.promo?.claimed ? 'คุณได้รับโปรโมชั่นนี้แล้ว' : 'รับโปรโมชั่น' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Claim Popup -->
    <div v-if="claimPopup.show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-sm w-full p-6 text-center">
        <div v-if="claimPopup.success" class="mb-4">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-green-500 text-2xl">✓</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">รับโปรโมชั่นสำเร็จ!</h3>
          <p class="text-gray-600">คุณได้รับโปรโมชั่น {{ claimPopup.promo?.title }} เรียบร้อยแล้ว</p>
        </div>
        
        <div v-else class="mb-4">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-red-500 text-2xl">!</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">ไม่สามารถรับโปรโมชั่นได้</h3>
          <p class="text-gray-600">คุณได้รับโปรโมชั่นนี้ไปแล้ว</p>
        </div>
      </div>
    </div>
    <!-- Bottom Navigation -->
    <AppFooter />
  </div>
</template>

<script setup>

useHead({
  title: 'promotion - My Casino Site',
  meta: [
    { name: 'description', content: 'Learn more about our platform and gaming experience.' },
    { name: 'keywords', content: 'casino, online games, rewards' },
    { property: 'og:title', content: 'promotion Us - My Casino' },
    { property: 'og:description', content: 'Play and win real rewards in our platform.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://promotion.com/promotion' },
    { property: 'og:image', content: 'https://promotion.com/og-image.png' }
  ],
  link: [
    { rel: 'canonical', href: 'https://promotion.com/promotion' }
  ]
})

import { ref, computed } from 'vue';
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
// Popup states
const detailsPopup = ref({ show: false, promo: null });
const claimPopup = ref({ show: false, promo: null, success: false });
const searchQuery = ref('');
const activeCategory = ref('all');

// Categories
const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'new', name: 'สมาชิกใหม่' },
  { id: 'deposit', name: 'ฝากเงิน' },
  { id: 'special', name: 'พิเศษ' },
  { id: 'casino', name: 'คาสิโน' },
  { id: 'slot', name: 'สล็อต' },
  { id: 'sport', name: 'กีฬา' }
];

// Mock data for promotions with direct image URLs
const promotions = ref([
  // New Member Promotions
  {
    id: 1,
    title: 'โบนัสต้อนรับสมาชิกใหม่ 100%',
    categoryId: 'new',
    provider: 'Casino VIP',
    icon: '🎰',
    expiry: '30 เม.ย. 2025',
    description: 'รับโบนัสสูงสุด 1,000 บาท สำหรับการฝากครั้งแรก',
    fullDescription: 'เพิ่มความสนุกให้กับการเล่นคาสิโนออนไลน์ของคุณด้วยโบนัสต้อนรับสมาชิกใหม่ 100% สูงสุด 1,000 บาท เมื่อคุณสมัครและฝากเงินครั้งแรก',
    amount: '1,000 บาท',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ต้องฝากเงินขั้นต่ำ 300 บาท',
      'ทำเทิร์น 5 เท่าของยอดโบนัส',
      'โปรโมชั่นมีระยะเวลา 7 วันหลังจากรับ',
      'สามารถใช้ได้กับเกมคาสิโนเท่านั้น'
    ]
  },
  {
    id: 2,
    title: 'แพ็คเกจเริ่มต้นสำหรับผู้เล่นใหม่',
    categoryId: 'new',
    provider: 'XBET',
    icon: '🎁',
    expiry: '31 ธ.ค. 2025',
    description: 'รับฟรีสปิน 50 ครั้งและโบนัส 500 บาท',
    fullDescription: 'เริ่มต้นการเดิมพันกับ XBET ด้วยแพ็คเกจสุดคุ้ม รับฟรีสปิน 50 ครั้งและโบนัสเงินฝาก 500 บาท สำหรับสมาชิกใหม่เท่านั้น',
    amount: '500 บาท + 50 ฟรีสปิน',
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'สำหรับสมาชิกใหม่เท่านั้น',
      'ต้องยืนยันอีเมลและเบอร์โทรศัพท์',
      'ฟรีสปินใช้ได้กับเกมที่กำหนดเท่านั้น',
      'โบนัสมีอายุ 15 วัน'
    ]
  },

  // Deposit Promotions
  {
    id: 3,
    title: 'โบนัสฝากเงินประจำวัน 10%',
    categoryId: 'deposit',
    provider: 'Casino Rewards',
    icon: '💰',
    expiry: 'ไม่มีวันหมด',
    description: 'รับโบนัส 10% ทุกวันเมื่อฝากเงิน',
    fullDescription: 'รับโบนัสพิเศษ 10% ทุกครั้งที่คุณฝากเงินในแต่ละวัน สูงสุด 500 บาทต่อวัน ไม่มีวันหมดอายุ เล่นได้ทุกวัน',
    amount: '500 บาท',
    image: 'https://images.unsplash.com/photo-1518895312237-a9e23508077d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ฝากขั้นต่ำ 200 บาท',
      'รับได้วันละ 1 ครั้ง',
      'ทำเทิร์น 3 เท่า',
      'ถอนได้สูงสุด 5,000 บาท'
    ]
  },
  {
    id: 4,
    title: 'โบนัสฝากเงินวันศุกร์ 50%',
    categoryId: 'deposit',
    provider: 'XBET',
    icon: '📅',
    expiry: 'ทุกวันศุกร์',
    description: 'รับโบนัส 50% ทุกการฝากในวันศุกร์',
    fullDescription: 'เพิ่มความสนุกในวันศุกร์ด้วยโบนัสพิเศษ 50% สำหรับการฝากเงินในวันศุกร์ ไม่ว่าจะฝากกี่ครั้งก็รับได้',
    amount: '1,000 บาท',
    image: 'https://images.unsplash.com/photo-1611159063981-b8c8c4301869?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ใช้ได้เฉพาะวันศุกร์',
      'ฝากขั้นต่ำ 300 บาท',
      'ทำเทิร์น 5 เท่า',
      'ถอนได้หลังทำเทิร์นครบ'
    ]
  },
  
  // Special Promotions
  {
    id: 5,
    title: 'โบนัสวันเกิด 200%',
    categoryId: 'special',
    provider: 'VIP Club',
    icon: '🎂',
    expiry: 'ตามวันเกิด',
    description: 'รับโบนัสพิเศษ 200% ในวันเกิดของคุณ',
    fullDescription: 'ฉลองวันเกิดของคุณกับโบนัสพิเศษ 200% สูงสุด 2,000 บาท ใช้ได้ภายใน 7 วันนับจากวันเกิดของคุณ',
    amount: '2,000 บาท',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ต้องยืนยันวันเกิดในโปรไฟล์',
      'ฝากขั้นต่ำ 500 บาท',
      'ใช้ได้ภายใน 7 วันนับจากวันเกิด',
      'ทำเทิร์น 10 เท่า'
    ]
  },
  {
    id: 6,
    title: 'แคชแบ็ค 5% ทุกสัปดาห์',
    categoryId: 'special',
    provider: 'XBET',
    icon: '🔄',
    expiry: 'ทุกวันจันทร์',
    description: 'รับเงินคืน 5% จากยอดเสียสะสมทุกสัปดาห์',
    fullDescription: 'ไม่ว่าจะแพ้หรือชนะ คุณก็ได้เงินคืน! รับแคชแบ็ค 5% จากยอดเสียสะสมตลอดสัปดาห์ โอนเข้าบัญชีทุกวันจันทร์',
    amount: 'ไม่จำกัด',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'คำนวณจากยอดเสียสุทธิ',
      'ต้องมียอดเล่นขั้นต่ำ 1,000 บาท/สัปดาห์',
      'โอนเข้าบัญชีอัตโนมัติทุกวันจันทร์',
      'ไม่มีเงื่อนไขการทำเทิร์น'
    ]
  },
  
  // Casino Promotions
  {
    id: 7,
    title: 'โบนัสคาสิโนสด 25%',
    categoryId: 'casino',
    provider: 'Live Casino',
    icon: '🎲',
    expiry: '31 ต.ค. 2025',
    description: 'รับโบนัส 25% เมื่อเล่นคาสิโนสด',
    fullDescription: 'สัมผัสประสบการณ์คาสิโนสดกับดีลเลอร์มืออาชีพ และรับโบนัส 25% ทุกครั้งที่ฝากเงินเพื่อเล่นคาสิโนสด',
    amount: '1,000 บาท',
    image: 'https://images.unsplash.com/photo-1605870445919-838d190e8e1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ใช้ได้กับเกมคาสิโนสดเท่านั้น',
      'ฝากขั้นต่ำ 500 บาท',
      'ทำเทิร์น 7 เท่า',
      'มีอายุ 3 วัน'
    ]
  },
  {
    id: 8,
    title: 'ทัวร์นาเมนต์แบล็คแจ็ค',
    categoryId: 'casino',
    provider: 'Card Masters',
    icon: '🃏',
    expiry: 'ทุกสัปดาห์',
    description: 'ชิงเงินรางวัลรวม 100,000 บาท',
    fullDescription: 'เข้าร่วมทัวร์นาเมนต์แบล็คแจ็คประจำสัปดาห์ และลุ้นรับส่วนแบ่งเงินรางวัลรวมมูลค่า 100,000 บาท',
    amount: '100,000 บาท',
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ค่าสมัคร 200 บาท',
      'เริ่มทุกวันจันทร์ สิ้นสุดวันอาทิตย์',
      'ต้องเล่นอย่างน้อย 50 มือ',
      'ประกาศผลทุกวันจันทร์'
    ]
  },
  
  // Slot Promotions
  {
    id: 9,
    title: 'ฟรีสปิน 100 ครั้ง',
    categoryId: 'slot',
    provider: 'Slot Paradise',
    icon: '🎰',
    expiry: '15 พ.ย. 2025',
    description: 'รับฟรีสปิน 100 ครั้งสำหรับเกมใหม่',
    fullDescription: 'ทดลองเล่นเกมสล็อตใหม่ล่าสุดของเราด้วยฟรีสปิน 100 ครั้ง ไม่ต้องฝากเงิน เพียงล็อกอินและกดรับโปรโมชั่น',
    amount: '100 ฟรีสปิน',
    image: 'https://images.unsplash.com/photo-1596731405980-1b3817cf4816?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ใช้ได้กับเกม Lucky Dragon เท่านั้น',
      'ต้องเล่นให้ครบ 100 ครั้ง',
      'ถอนได้สูงสุด 1,000 บาท',
      'ทำเทิร์น 15 เท่าของยอดชนะ'
    ]
  },
  {
    id: 10,
    title: 'สล็อตแจ็คพอตรายชั่วโมง',
    categoryId: 'slot',
    provider: 'Jackpot Games',
    icon: '💎',
    expiry: 'ตลอด 24 ชั่วโมง',
    description: 'ลุ้นแจ็คพอตทุกชั่วโมง มูลค่ารวมกว่า 1 ล้านบาท',
    fullDescription: 'เล่นสล็อตและลุ้นรับแจ็คพอตพิเศษที่แจกทุกชั่วโมงตลอด 24 ชั่วโมง มูลค่ารวมกว่า 1 ล้านบาทต่อวัน',
    amount: '1,000,000 บาท',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'เล่นขั้นต่ำ 1 บาทต่อสปิน',
      'ต้องเล่นในช่วงเวลาที่กำหนด',
      'แจ็คพอตสุ่มแจกทุกชั่วโมง',
      'ถอนได้ทันทีไม่มีเงื่อนไข'
    ]
  },
  
  // Sport Promotions
  {
    id: 11,
    title: 'โบนัสแทงบอล 50%',
    categoryId: 'sport',
    provider: 'Sports Betting',
    icon: '⚽',
    expiry: 'ตลอดฤดูกาล',
    description: 'รับโบนัส 50% สำหรับการแทงบอลครั้งแรก',
    fullDescription: 'เริ่มต้นการแทงบอลกับเราด้วยโบนัส 50% สำหรับการฝากเงินครั้งแรกเพื่อแทงบอล สูงสุด 2,000 บาท',
    amount: '2,000 บาท',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c643e7f76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'ใช้ได้กับการแทงบอลเท่านั้น',
      'ฝากขั้นต่ำ 300 บาท',
      'ทำเทิร์น 6 เท่า',
      'อัตราต่อรองขั้นต่ำ 1.50'
    ]
  },
  {
    id: 12,
    title: 'คืนเงิน 10% สำหรับการแทงมวย',
    categoryId: 'sport',
    provider: 'Fight Club',
    icon: '🥊',
    expiry: 'ทุกการแข่งขัน',
    description: 'รับคืน 10% สำหรับการแทงมวยทุกรายการ',
    fullDescription: 'แทงมวยกับเราและรับเงินคืน 10% ไม่ว่าคุณจะแพ้หรือชนะ เพียงแทงขั้นต่ำ 200 บาทต่อรายการ',
    amount: 'สูงสุด 1,000 บาท',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    claimed: false,
    conditions: [
      'แทงขั้นต่ำ 200 บาทต่อรายการ',
      'คืนเงินทันทีหลังจบการแข่งขัน',
      'ไม่มีเงื่อนไขการทำเทิร์น',
      'ถอนได้ทันที'
    ]
  }
]);

// Set active category
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId;
};

// Get category name by ID
const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : '';
};

// Get category class by ID
const getCategoryClass = (categoryId) => {
  switch(categoryId) {
    case 'new':
      return 'bg-green-100 text-green-800';
    case 'deposit':
      return 'bg-blue-100 text-blue-800';
    case 'special':
      return 'bg-purple-100 text-purple-800';
    case 'casino':
      return 'bg-yellow-100 text-yellow-800';
    case 'slot':
      return 'bg-red-100 text-red-800';
    case 'sport':
      return 'bg-indigo-100 text-indigo-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

// Filtered promotions based on active category and search query
const filteredPromotions = computed(() => {
  let filtered = promotions.value;
  
  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(promo => promo.categoryId === activeCategory.value);
  }
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim();
    filtered = filtered.filter(promo => 
      promo.title.toLowerCase().includes(query) || 
      promo.description.toLowerCase().includes(query) ||
      promo.provider.toLowerCase().includes(query)
    );
  }
  
  return filtered;
});

// Show details popup
const showDetails = (promo) => {
  detailsPopup.value = {
    show: true,
    promo
  };
};

// Close details popup
const closeDetailsPopup = () => {
  detailsPopup.value.show = false;
};

// Claim promotion
const claimPromotion = (promo) => {
  if (!promo) return;
  
  if (promo.claimed) {
    // Already claimed
    claimPopup.value = {
      show: true,
      promo,
      success: false
    };
  } else {
    // Claim success
    const promoIndex = promotions.value.findIndex(p => p.id === promo.id);
    if (promoIndex !== -1) {
      promotions.value[promoIndex].claimed = true;
      
      // If claiming from details popup, update that too
      if (detailsPopup.value.promo && detailsPopup.value.promo.id === promo.id) {
        detailsPopup.value.promo.claimed = true;
      }
      
      claimPopup.value = {
        show: true,
        promo,
        success: true
      };
    }
  }
  
  // Close details popup if open
  closeDetailsPopup();
};

// Close claim popup
const closeClaimPopup = () => {
  claimPopup.value.show = false;
};
</script>

<style scoped>
/* Animation for popups */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.fixed {
  animation: fadeIn 0.3s ease-out;
}

.fixed > div {
  animation: scaleIn 0.3s ease-out;
}
</style>