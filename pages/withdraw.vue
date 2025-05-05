<template>
  <div class="min-h-screen bg-pink-50 pb-24">
    <AppHeader />
    <div class="container mx-auto p-4 max-w-lg">
      <WithdrawForm />
      <WithdrawHistory />
    </div>
    <AppFooter />
  </div>
</template>




<script setup>
import Swal from 'sweetalert2'
import AppHeader from '~/components/layout/AppHeader.vue'
import WithdrawForm from '~/components/withdraw/WithdrawForm.vue'
import WithdrawHistory from '~/components/withdraw/WithdrawHistory.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
</script>
