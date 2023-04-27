<script setup lang="ts">
  import HomePage from '../components/HomePage.vue'
  import NavHeader from '../components/NavHeader.vue'
  import NavFooterHome from '../components/NavFooterHome.vue'
</script>

<template>
  <main>
    <div class="h-max bg-no-repeat bg-right-top bg-[url('../assets/graphics/home-header-graphics.webp')]">
     <NavHeader currentPage="Home"/> 
     <div class="h-max"><HomePage/></div>
    </div>
    <div class="local inset-x-0 bottom-0">
      <NavFooterHome/>
     </div>
  </main>
</template>
