<template>
  <div class="hero-carousel-container">
    <client-only>
      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :space-between="20"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :navigation="true"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }"
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
    </client-only>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation

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
  },
  {
    title: 'แนะนำเพื่อน รับ 200 บาท',
    description: 'แนะนำเพื่อนมาสมัคร รับโบนัสทันที 200 บาทต่อคน',
    image: 'https://placehold.co/600x300'
  },
  {
    title: 'โบนัสเติมเงินประจำวัน',
    description: 'รับโบนัส 5% ทุกครั้งที่เติมเงิน สูงสุด 500 บาทต่อวัน',
    image: 'https://placehold.co/600x300'
  }
])
</script>

<style scoped>
.hero-carousel-container {
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0;
  overflow: hidden;
}

.promotion-slide {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 220px;
  background: #fff;
  transition: transform 0.3s ease;
}

.promotion-slide:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
  z-index: 2;
}

.slide-title {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.slide-description {
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-button {
  background: #ec4899;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.slide-button:hover {
  background: #db2777;
}

:deep(.swiper-pagination-bullet) {
  background: #ec4899;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ec4899;
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767px) {
  .promotion-slide {
    height: 180px;
  }

  .slide-title {
    font-size: 1rem;
  }

  .slide-description {
    font-size: 0.75rem;
    -webkit-line-clamp: 1;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}
</style>
