<template>
  <div class="min-h-screen bg-pink-50">
    <!-- Header -->
    <header class="bg-pink-600 text-white p-4 flex items-center justify-between">
      <div class="text-2xl font-bold">XBET</div>
      <div class="flex items-center space-x-2">
        <div class="flex items-center bg-yellow-400 rounded-full px-3 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-yellow-800">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span class="ml-1 text-gray-800 font-medium">124.34</span>
        </div>
        <button class="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          DEPOSIT
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </header>

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

      <!-- Referral Card -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <!-- Title -->
        <div class="flex items-start mb-4">
          <div class="bg-gray-200 rounded-lg p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186c.54-.02 1.1.038 1.571.298 1.055.585 1.055 2.084 0 2.669-.94.52-1.858.58-2.447.58m0-2.186V9.47c0-1.303-.386-2.44-1-3.218m0 4.466v1.3m0-1.3c1.216.248 2.504.25 3.624-.012m-3.624.012c-.012-.012-.02-.02-.034-.032M7.2 4.731c.556-.172 1.32-.4 2.01-.634l.013-.004.003-.002.001-.001a.5.5 0 0 1 .31.015l.003.001.004.002.017.006.022.008.045.015.068.02.17.05c.32.084.713.195 1.146.33l.043.014.04.013.01.003.001.001a.5.5 0 0 1-.076.785l-.002.001-.03.013A60.653 60.653 0 0 1 6.82 9.97l-.003-.002-.034-.014a2.75 2.75 0 0 1-.438-.176.75.75 0 0 1-.39-.969c.085-.28.228-.546.387-.795a60.47 60.47 0 0 1 1.74-2.654l.04-.058" />
            </svg>
          </div>
          <div class="flex-1">
            <h1 class="text-xl font-bold text-gray-800">แชร์ถึงแบ่งปัน เพื่อน รับรายได้ตลอดชีพ</h1>
            <p class="text-gray-600 text-sm mt-1">แชร์ให้เพื่อน รับรายได้เมื่อเพื่อนของคุณสมัครและเล่นเกมส์เดิมพันต่อไป ยิ่งชวนมากยิ่งได้</p>
          </div>
        </div>

        <!-- Referral Link -->
        <div class="mb-6">
          <div class="text-pink-600 font-medium mb-2">ลิงก์แนะนำเพื่อน</div>
          <div class="flex items-center bg-gray-100 rounded-lg p-3 mb-4">
            <div class="flex-1 text-gray-600 text-sm truncate">
              {{ referralLink }}
            </div>
            <button @click="copyReferralLink" class="ml-2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
            </button>
          </div>

          <!-- QR Code and Share Buttons -->
          <div class="flex mb-6">
            <div class="w-1/3 bg-gray-100 rounded-lg p-3 flex flex-col items-center justify-center">
              <div class="w-20 h-20 bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-gray-300">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
                </svg>
              </div>
              <div class="text-xs text-gray-500 mt-2">QR Code แชร์</div>
            </div>
            <div class="w-2/3 grid grid-cols-2 gap-2 pl-3">
              <button @click="shareToSocial('LINE')" class="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <span class="font-medium">LINE</span>
                <span class="ml-1 text-xs">แชร์</span>
              </button>
              <button @click="shareToSocial('Facebook')" class="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <span class="font-medium">FB</span>
                <span class="ml-1 text-xs">แชร์</span>
              </button>
              <button @click="shareToSocial('Twitter')" class="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <span class="font-medium">X</span>
                <span class="ml-1 text-xs">แชร์</span>
              </button>
              <button @click="shareToSocial('Other')" class="bg-white border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span class="ml-1 text-xs">อื่นๆ</span>
              </button>
            </div>
          </div>

          <!-- Commission Tiers -->
          <div class="mb-6">
            <div class="text-red-500 font-medium mb-2">แผนค่าคอมมิชชั่นแบบชั้นไม่มีขีดจำกัด</div>
            
            <!-- Tier 1 -->
            <div class="mb-3">
              <div class="flex justify-between mb-1">
                <div class="text-sm">Tier 1 (เพื่อนโดยตรง)</div>
                <div class="text-red-500 font-medium">50%</div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-pink-500 h-2 rounded-full" style="width: 50%"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">รับ 50% จากยอดกำไรของสมาชิก + 0.5% จากยอดเล่นทั้งหมด</div>
            </div>
            
            <!-- Tier 2 -->
            <div>
              <div class="flex justify-between mb-1">
                <div class="text-sm">Tier 2 (เพื่อนของเพื่อน)</div>
                <div class="text-red-500 font-medium">10%</div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-pink-500 h-2 rounded-full" style="width: 10%"></div>
              </div>
              <div class="text-xs text-gray-500 mt-1">รับ 10% จากยอดกำไรของสมาชิก + 0.1% จากยอดเล่นทั้งหมด</div>
            </div>
          </div>

          <!-- Earnings -->
          <div class="bg-yellow-50 rounded-lg p-4 mb-6">
            <div class="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div class="text-yellow-800 font-medium">รายได้ทั้งหมดของคุณ</div>
            </div>
            <div class="text-2xl font-bold text-yellow-800 ml-7">฿ {{ totalEarnings }}</div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button @click="withdrawEarnings" class="w-full bg-pink-500 text-white rounded-full py-3 font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V11.25a9.06 9.06 0 0 0-9 9m13.5-9v-2.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V8.25m-4.5 0h3" />
              </svg>
              ถอนรายได้
            </button>
            <button @click="shareToSocial('All')" class="w-full bg-pink-500 text-white rounded-full py-3 font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186c.54-.02 1.1.038 1.571.298 1.055.585 1.055 2.084 0 2.669-.94.52-1.858.58-2.447.58m0-2.186V9.47c0-1.303-.386-2.44-1-3.218m0 4.466v1.3m0-1.3c1.216.248 2.504.25 3.624-.012m-3.624.012c-.012-.012-.02-.02-.034-.032M7.2 4.731c.556-.172 1.32-.4 2.01-.634l.013-.004.003-.002.001-.001a.5.5 0 0 1 .31.015l.003.001.004.002.017.006.022.008.045.015.068.02.17.05c.32.084.713.195 1.146.33l.043.014.04.013.01.003.001.001a.5.5 0 0 1-.076.785l-.002.001-.03.013A60.653 60.653 0 0 1 6.82 9.97l-.003-.002-.034-.014a2.75 2.75 0 0 1-.438-.176.75.75 0 0 1-.39-.969c.085-.28.228-.546.387-.795a60.47 60.47 0 0 1 1.74-2.654l.04-.058" />
              </svg>
              แชร์ตอนนี้
            </button>
          </div>
        </div>
      </div>

      <!-- Referral Stats Tabs -->
      <div class="bg-gray-100 rounded-lg mb-4 flex">
        <button 
          @click="activeTab = 'friends'" 
          class="flex-1 py-3 flex items-center justify-center"
          :class="activeTab === 'friends' ? 'bg-white rounded-lg shadow-sm' : ''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               :class="['w-5 h-5 mr-2', activeTab === 'friends' ? 'text-gray-600' : 'text-gray-400']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          <span :class="activeTab === 'friends' ? 'text-gray-800' : 'text-gray-600'">เพื่อนที่แนะนำ</span>
        </button>
        <button 
          @click="activeTab = 'earnings'" 
          class="flex-1 py-3 flex items-center justify-center"
          :class="activeTab === 'earnings' ? 'bg-white rounded-lg shadow-sm' : ''"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
               :class="['w-5 h-5 mr-2', activeTab === 'earnings' ? 'text-gray-600' : 'text-gray-400']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span :class="activeTab === 'earnings' ? 'text-gray-800' : 'text-gray-600'">รายได้</span>
        </button>
      </div>

      <!-- Tab Content -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-20">
        <!-- Friends Tab Content -->
        <div v-if="activeTab === 'friends'">
          <h2 class="text-pink-600 font-medium mb-2">เพื่อนที่แนะนำ</h2>
          <p class="text-gray-500 text-sm mb-4">รายชื่อเพื่อนที่คุณแนะนำ</p>
          
          <!-- Friend List -->
          <div class="space-y-4">
            <div v-for="friend in referredFriends" :key="friend.id" class="flex items-center">
              <div :class="['w-10 h-10 rounded-full flex items-center justify-center mr-3', friend.avatarColor]">
                {{ friend.avatar }}
              </div>
              <div class="flex-1">
                <div class="font-medium">{{ friend.username }}</div>
                <div class="text-gray-500 text-xs">{{ friend.registeredTime }}</div>
              </div>
              <div class="text-right">
                <div class="text-gray-500 text-xs">รายได้</div>
                <div class="text-red-500 font-medium">฿ {{ friend.earnings }}</div>
              </div>
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
        </div>

        <!-- Earnings Tab Content -->
        <div v-if="activeTab === 'earnings'">
          <h2 class="text-pink-600 font-medium mb-2">รายได้</h2>
          <p class="text-gray-500 text-sm mb-4">ประวัติรายได้จากการแนะนำเพื่อน</p>
          
          <!-- Earnings Summary -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-pink-50 rounded-lg p-4">
              <div class="text-sm text-gray-600 mb-1">รายได้ทั้งหมด</div>
              <div class="text-xl font-bold text-pink-600">฿ {{ totalEarnings }}</div>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <div class="text-sm text-gray-600 mb-1">เพื่อนทั้งหมด</div>
              <div class="text-xl font-bold text-green-600">{{ referredFriends.length }}</div>
            </div>
          </div>
          
          <!-- Earnings History -->
          <div class="space-y-4">
            <div v-for="(earning, index) in earningsHistory" :key="index" class="flex items-center">
              <div class="bg-green-100 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-green-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="font-medium">฿ {{ earning.amount }}</div>
                <div class="text-gray-500 text-sm flex items-center">
                  {{ earning.date }} • {{ earning.source }}
                </div>
              </div>
              <div class="text-green-500 font-medium">{{ earning.type }}</div>
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
        </div>
      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="fixed bottom-0 left-0 right-0 bg-pink-500 text-white flex justify-around py-3">
      <button class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span class="text-xs">หน้าหลัก</span>
      </button>
      <button class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
        </svg>
        <span class="text-xs">เงินฝาก</span>
      </button>
      <button class="flex flex-col items-center relative">
        <div class="absolute -top-1 -right-1 w-5 h-5 bg-pink-600 rounded-full flex items-center justify-center">
          <span class="text-xs text-white">3</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
        </svg>
        <span class="text-xs">เกมส์</span>
      </button>
      <button class="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
        </svg>
        <span class="text-xs">ติดต่อ</span>
      </button>
    </div>

    <!-- Chat Button -->
    <div class="fixed bottom-20 right-4">
      <button class="bg-pink-500 text-white rounded-full p-3 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2'
// Active tab state
const activeTab = ref('friends');

// Referral data
const referralLink = ref('https://xgambet.com/register?ref=user123');
const totalEarnings = ref('455.00');

// Referred friends
const referredFriends = [
  {
    id: 1,
    username: 'user456',
    avatar: 'U',
    avatarColor: 'bg-red-100 text-red-500',
    registeredTime: 'สมัครเมื่อ 3 วันที่แล้ว',
    earnings: '250'
  },
  {
    id: 2,
    username: 'tiger888',
    avatar: 'T',
    avatarColor: 'bg-yellow-100 text-yellow-500',
    registeredTime: 'สมัครเมื่อ 1 สัปดาห์',
    earnings: '120'
  },
  {
    id: 3,
    username: 'lucky777',
    avatar: 'L',
    avatarColor: 'bg-purple-100 text-purple-500',
    registeredTime: 'สมัครเมื่อ 2 สัปดาห์',
    earnings: '85'
  }
];

// Earnings history
const earningsHistory = [
  {
    amount: '120.00',
    date: '18/04/2025 14:30',
    source: 'user456',
    type: 'คอมมิชชั่น'
  },
  {
    amount: '85.00',
    date: '17/04/2025 10:15',
    source: 'lucky777',
    type: 'คอมมิชชั่น'
  },
  {
    amount: '50.00',
    date: '16/04/2025 18:22',
    source: 'tiger888',
    type: 'คอมมิชชั่น'
  },
  {
    amount: '100.00',
    date: '15/04/2025 09:45',
    source: 'user456',
    type: 'โบนัส'
  },
  {
    amount: '70.00',
    date: '14/04/2025 16:10',
    source: 'tiger888',
    type: 'คอมมิชชั่น'
  },
  {
    amount: '30.00',
    date: '13/04/2025 11:30',
    source: 'lucky777',
    type: 'คอมมิชชั่น'
  }
];

// Methods
const copyReferralLink = () => {
  if (process.client) {
    navigator.clipboard.writeText(referralLink.value);
    //alert('คัดลอกลิงก์แนะนำเพื่อนแล้ว');
    Swal.fire({
      icon: 'success',
      title: 'กรุณากรอก',
      text: 'คัดลอกลิงก์แนะนำเพื่อนแล้ว'
    });
    return;
  }
};

const shareToSocial = (platform) => {
  //alert(`กำลังแชร์ไปยัง ${platform}`);
  Swal.fire({
      icon: 'success',
      title: 'กรุณากรอก',
      text: `กำลังแชร์ไปยัง ${platform}`
    });
    return;
};

const withdrawEarnings = () => {
  //alert(`กำลังถอนรายได้ ${totalEarnings.value} บาท`);
    Swal.fire({
      icon: 'warning',
      title: 'กรุณากรอก',
      text: `กำลังถอนรายได้ ${totalEarnings.value} บาท`
    });
    return;
};
</script>

<style scoped>
/* Custom styles */
</style>