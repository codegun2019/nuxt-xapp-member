<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
  <AppHeader/>
  <div class="max-w-md w-full mx-auto mt-10 bg-white-50 rounded-2xl shadow-sm p-2 border border-gray-100">
    <Balance/>
    <BalanceMore/>
    <CardRanking/>
    <GridMenu/>
    <HeroCarousel/>
  </div>
  <AppFooter/>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'
import AppHeader from '~/components/layout/AppHeader.vue'
import Balance from '~/components/xbet/BalanceCard.vue'
import BalanceMore from '~/components/xbet/BalanceCardSecondary.vue'
import CardRanking from '~/components/xbet/CardLevelRanking.vue'
import GridMenu from '~/components/xbet/GridMenu.vue'
import HeroCarousel from '~/components/xbet/HeroCarousel.vue'

import AppFooter from '~/components/layout/AppFooter.vue'
</script>
