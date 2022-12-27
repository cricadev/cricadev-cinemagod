<template>
  <div>
    index

    <div
      class="fixed px-4 py-3 shadow-2xl ticket-btn bg-secondary rounded-xl right-8"
      @click="openModal"
    >
      <Icon name="mdi:ticket-confirmation"></Icon>
    </div>
    <div class="menu bg-background" v-if="toggle">
      <div class="goback">
        <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
          <Icon name="mdi:arrow-left" @click="openModal"></Icon>
        </div>
      </div>
      <div
        class="fixed flex items-center justify-center gap-4 your-tickets top-11 left-24"
      >
        <div class="">
          <Icon name="mdi:ticket-confirmation" size="24px"></Icon>
        </div>
        <span class="font-semibold text-sm_m">Your tickets</span>
      </div>
    </div>
    <div class="antimenu bg-background" v-if="!toggle">
      <div class="goback">
        <div class="fixed px-4 py-3 rounded-xl left-8 top-8 bg-secondary">
          <Icon name="mdi:arrow-left" @click="openModal"></Icon>
        </div>
      </div>
      <div
        class="fixed flex items-center justify-center gap-4 your-tickets top-11 left-24"
      >
        <div class="">
          <Icon name="mdi:ticket-confirmation" size="24px"></Icon>
        </div>
        <span class="font-semibold text-sm_m">Your tickets</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const toggle = ref(false);
const openModal = () => {
  toggle.value = !toggle.value;
};
</script>
<style>
.menu,
.antimenu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;

  transform: translateX(100%);
  animation: menutoggle 0.5s ease-in-out forwards;
  @keyframes menutoggle {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
}
.antimenu {
  animation: antimenu 0.5s ease-in-out forwards;
  @keyframes antimenu {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>
