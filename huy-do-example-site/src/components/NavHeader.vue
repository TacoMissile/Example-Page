<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'

  interface Props {
    currentPage: String
  }

  const props = defineProps<Props>()
</script>

<template>
  <header class="px-12 py-12">
      <nav class="float-right grid grid-cols-4 gap-6 text-base">
          
        <RouterLink to="/">Home</RouterLink>
        
        <RouterLink to="/about">About Us</RouterLink>
          
        <div>Services</div>
          
        <div>Contact Us</div>
      </nav>
      <div class="font-bold text-2xl text-purple">Dream Agency</div>

         <!-- Create a offset large underline behind the text-->
         <!-- <div class="relative">
        <p class="font-bold">About Us</p>
          <div class="absolute bottom-1.5 -left-1">
            <p>
              <div class="relative -z-50 bg-orange text-white/[0] select-none text-sm">
                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
              </div>
            </p>
          </div>
      </div> -->
  </header>

  <RouterView />
</template>