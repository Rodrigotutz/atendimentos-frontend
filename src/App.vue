<template>
  <Sidebar />
  <main class="bg">
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
    background: linear-gradient(326deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9164040616246498) 48%, rgba(0,0,0,0.8463760504201681) 100%);
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
    transform: translateX(-200px);
  }
  .page-slide-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }


</style>
