<template>
  <div
    class="relative overflow-hidden rounded-2xl p-5 mb-5 text-white bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg"
  >
    <!-- Blur background effect -->
    <div
      class="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/30 to-primary-600/10 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"
    ></div>

    <!-- Header -->
    <div class="flex justify-between items-center mb-2">
      <span class="text-base opacity-90 font-medium">Current Balance</span>
      <div class="flex items-center text-sm">
        <span>{{ userPhone }}</span>
        <button
          @click="copyToClipboard(userPhone)"
          class="ml-1 p-1 rounded hover:bg-white/20 transition"
        >
          <DocumentDuplicateIcon class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Balance -->
    <div class="flex items-baseline text-3xl font-bold my-2">
      <span class="text-4xl mr-1">฿</span>
      <span class="text-5xl">{{ formatAmount(balance) }}</span>
      <span class="text-xl opacity-70">.00</span>
    </div>

    <!-- Username -->
    <div class="flex items-center justify-between text-sm mb-5 opacity-90">
      <div class="flex items-center">
        <span>{{ userName }}</span>
        <button
          @click="copyToClipboard(userName)"
          class="ml-1 p-1 rounded hover:bg-white/20 transition"
        >
          <DocumentDuplicateIcon class="w-4 h-4" />
        </button>
      </div>

      <!-- ปุ่ม toggle เมนูอยู่ขวา -->
      <button
        @click="toggleMenu"
        class="text-xs text-white/70 hover:text-white transition"
      >
        {{ menuOpen ? "ซ่อนเมนู" : "แสดงเมนู" }}
      </button>
    </div>

    <!-- Menu Actions -->
    <Transition name="slide-fade-height">
      <div v-show="menuOpen" class="grid grid-cols-5 gap-3">
        <NuxtLink
          v-for="(action, i) in actions"
          :key="i"
          :to="action.link"
          @click.prevent="emit(action.event)"
          class="flex flex-col items-center"
        >
          <div
            class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center mb-1 transition hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <component :is="action.icon" class="w-[18px] h-[18px] text-white" />
          </div>
          <span class="text-white/80 text-[11px]">{{ action.label }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </div>

  <Toast :show="toast.show" :message="toast.message" />
</template>
<script setup>
import {
  DocumentDuplicateIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  GiftIcon,
  SparklesIcon,
  ArrowPathIcon,
} from "@heroicons/vue/24/outline";

import Toast from "~/components/Toast.vue";
import { useToast } from "~/composables/useToast";
import { useCookie } from "#app";

const { toast, showToast } = useToast();

const props = defineProps({
  balance: { type: Number, default: 126.49 },
  userPhone: { type: String, default: "089-123-4567" },
  userName: { type: String, default: "สมชาย_รักเกม" },
});

const emit = defineEmits(["deposit", "withdraw", "free", "diamond", "reload"]);

const formatAmount = (amount) => amount.toFixed(0);

const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => showToast("คัดลอกสำเร็จ!"))
    .catch(() => showToast("เกิดข้อผิดพลาดในการคัดลอก"));
};

// 🍪 เก็บสถานะเปิด/ปิดเมนูด้วย cookie
const menuOpen = useCookie("card-menu-open", { default: () => true });
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

// Action buttons
const actions = [
  {
    label: "Deposit",
    icon: ArrowDownTrayIcon,
    link: "/deposit",
    event: "deposit",
  },
  {
    label: "Withdraw",
    icon: ArrowUpTrayIcon,
    link: "/withdraw",
    event: "withdraw",
  },
  { label: "Free", icon: GiftIcon, link: "/freecredit", event: "free" },
  { label: "Diamond", icon: SparklesIcon, link: "/diamonds", event: "diamond" },
  { label: "Reload", icon: ArrowPathIcon, link: "#", event: "reload" },
];
</script>
<style scoped>
.slide-fade-height-enter-active,
.slide-fade-height-leave-active {
  transition: all 0.35s ease;
  overflow: hidden;
}

.slide-fade-height-enter-from,
.slide-fade-height-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  max-height: 0;
}

.slide-fade-height-enter-to,
.slide-fade-height-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px; /* มากพอให้ขยาย */
}
</style>
