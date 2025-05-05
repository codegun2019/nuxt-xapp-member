<template>
  <div class="hero-carousel-container relative">
    <client-only>
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, dynamicBullets: true }"
        navigation
        class="mySwiper"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="promotion-slide">
            <img :src="slide.image" :alt="slide.title" class="slide-image" />
            <div class="slide-content">
              <h3 class="slide-title">{{ slide.title }}</h3>
              <p class="slide-description">{{ slide.description }}</p>
              <button class="slide-button">รับโปรโมชั่น</button>
            </div>
          </div>
        </swiper-slide>
      </swiper>

      <!-- Custom Arrows -->
      <div class="swiper-custom-arrows">
        <div class="swiper-button-prev-custom" @click="goPrev">
          <ChevronLeftIcon class="w-5 h-5 text-pink-500" />
        </div>
        <div class="swiper-button-next-custom" @click="goNext">
          <ChevronRightIcon class="w-5 h-5 text-pink-500" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation

let swiperInstance = null

const slides = ref([
  {
    title: 'โบนัสต้อนรับสมาชิกใหม่ 100%',
    description: 'รับโบนัสสูงสุด 5,000 บาทสำหรับการฝากครั้งแรก',
    image: 'https://placehold.co/600x300'
  },
  {
    title: 'คืนยอดเสีย 10% ทุกวัน',
    description: 'รับเงินคืน 10% จากยอดเสียสูงสุด 1,000 บาทต่อวัน',
    image: 'https://placehold.co/600x300'
  },
  {
    title: 'โบนัสวันเกิด 500 บาท',
    description: 'รับโบนัสพิเศษในวันเกิดของคุณ ไม่ต้องทำเทิร์น',
    image: 'https://placehold.co/600x300'
  }
])

const goPrev = () => swiperInstance?.slidePrev()
const goNext = () => swiperInstance?.slideNext()

onMounted(() => {
  const instance = document.querySelector('.swiper')?.swiper
  if (instance) {
    swiperInstance = instance
  }
})
</script>

<style scoped>
.hero-carousel-container {
  width: 100%;
  padding: 1.5rem 0;
  overflow: hidden;
}

.promotion-slide {
  @apply relative rounded-xl overflow-hidden shadow-md bg-white transition-transform duration-300 ease-in-out h-[220px];
}

.promotion-slide:hover {
  transform: translateY(-5px);
}

.slide-image {
  @apply absolute top-0 left-0 w-full h-full object-cover z-10;
}

.slide-content {
  @apply absolute bottom-0 left-0 right-0 p-4 z-20 text-white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.slide-title {
  @apply text-lg font-bold mb-2;
}

.slide-description {
  @apply text-sm mb-3 line-clamp-2;
}

.slide-button {
  @apply bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition;
}

/* Swiper pagination */
:deep(.swiper-pagination-bullet) {
  background-color: #ec4899;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

/* Hide native arrows */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none !important;
}

/* Custom Arrows */
.swiper-custom-arrows {
  @apply absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 pointer-events-none;
}

.swiper-button-prev-custom,
.swiper-button-next-custom {
  @apply bg-white/80 w-8 h-8 rounded-full flex items-center justify-center shadow pointer-events-auto transition hover:scale-110;
}

@media (max-width: 767px) {
  .promotion-slide {
    @apply h-[180px];
  }

  .slide-title {
    @apply text-base;
  }

  .slide-description {
    @apply text-xs line-clamp-1;
  }

  .swiper-custom-arrows {
    display: none;
  }
}
</style>
