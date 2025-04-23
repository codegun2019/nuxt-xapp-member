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
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="(slide, index) in promotionSlides" :key="index">
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
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
// Note: In a real Nuxt project, you would import these in nuxt.config.js
// or use the CSS imports in the script setup

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;

// Sample promotion data
const promotionSlides = ref([
  {
    id: 1,
    title: 'โบนัสต้อนรับสมาชิกใหม่ 100%',
    description: 'รับโบนัสสูงสุด 5,000 บาทสำหรับการฝากครั้งแรก',
    image: '/images/promotions/welcome-bonus.jpg'
  },
  {
    id: 2,
    title: 'คืนยอดเสีย 10% ทุกวัน',
    description: 'รับเงินคืน 10% จากยอดเสียสูงสุด 1,000 บาทต่อวัน',
    image: 'https://placehold.co/600x400/000/fff?text=คืนยอดเสีย+10%+ทุกวัน'
  },
  {
    id: 3,
    title: 'โบนัสวันเกิด 500 บาท',
    description: 'รับโบนัสพิเศษในวันเกิดของคุณ ไม่ต้องทำเทิร์น',
    image: 'https://placehold.co/600x400/000/fff?text=โบนัสวันเกิด+500+บาท'
  },
  {
    id: 4,
    title: 'แนะนำเพื่อน รับ 200 บาท',
    description: 'แนะนำเพื่อนมาสมัคร รับโบนัสทันที 200 บาทต่อคน',
    image: 'https://placehold.co/600x400/000/fff?text=แนะนำเพื่อน+รับ+200+'
  },
  {
    id: 5,
    title: 'โบนัสเติมเงินประจำวัน',
    description: 'รับโบนัส 5% ทุกครั้งที่เติมเงิน สูงสุด 500 บาทต่อวัน',
    image: 'https://placehold.co/600x400/000/fff?text=โบนัสเติมเงิน+ประจำวัน'
  }
]);

// In a real application, you might fetch this data from an API
onMounted(() => {
  // You could fetch promotion data here
  // Example: fetchPromotions();
});

// Optional: Function to fetch promotions from API
// const fetchPromotions = async () => {
//   try {
//     const response = await fetch('/api/promotions');
//     const data = await response.json();
//     promotionSlides.value = data;
//   } catch (error) {
//     console.error('Error fetching promotions:', error);
//   }
// };
</script>

<style scoped>
.hero-carousel-container {
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-md) 0;
  overflow: hidden;
}

/* Slide Styles */
.promotion-slide {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 200px;
  background: var(--card-bg);
  transition: transform var(--transition-normal);
}

.promotion-slide:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
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
  padding: var(--spacing-md);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  z-index: 2;
}

.slide-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: var(--spacing-xs);
}

.slide-description {
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.slide-button {
  background: var(--primary);
  color: white;
  border: none;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.slide-button:hover {
  background: var(--primary-dark);
}

/* Swiper Custom Styles */
:deep(.swiper) {
  padding-bottom: 40px; /* Space for pagination */
}

:deep(.swiper-pagination) {
  bottom: 10px;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: var(--primary-light);
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  background: var(--primary);
  opacity: 1;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--primary);
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 1.2rem;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .promotion-slide {
    height: 180px;
  }
  
  .slide-title {
    font-size: 1rem;
  }
  
  .slide-description {
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
  }
  
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .promotion-slide {
    height: 190px;
  }
}

@media (min-width: 1024px) {
  .promotion-slide {
    height: 220px;
  }
}
</style>