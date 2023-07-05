<template>
  <Sidebar />
  <main class="bg text-dark">
    <router-view v-slot="{ Component }">
      <transition name="page-slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup>
  import Sidebar from './components/Sidebar.vue'
</script>

<style scoped>

  .bg {
    background: #f1f6fc;
    min-height: 100vh;
    color: white;
    overflow: hidden;
  }

  .page-slide-enter-active,
  .page-slide-leave-active {
    transition: 400ms ease-in-out;
  }  

  .page-slide-enter-from {
    opacity: 0;
    transform: translateX(-10px);
  }
  .page-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }


</style>
