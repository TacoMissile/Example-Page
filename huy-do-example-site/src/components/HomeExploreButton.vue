<script setup lang="ts">
    import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  
  const isOpen = ref(true)
  
  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
</script>

<template>
    <button 
        class="bg-orange text-purple mt-6 rounded-lg w-max h-max text-lg w-max"
        type="button"
        @click="openModal"

        >
        <div class="w-max py-3 px-12 font-bold">
            REQUEST MORE INFORMATION
        </div>
    </button>

    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
            >
              <DialogPanel
                class="w-min transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-extrabold leading-6 text-purple text-title mx-8"
                >
                  GET IN TOUCH
                </DialogTitle>
  
                <div class="flex flex-row mx-8">
                    <div class="mr-2">
                        <div class="text-xs mb-1">
                            FULL NAME
                        </div>
                        <input class="border-solid border-2 border-black p-2 rounded-lg w-64"/> 
                    </div>
                
                    <div>
                        <div class="text-xs mb-1">
                            EMAIL
                        </div>
                        <input class="border-solid border-2 border-black p-2 rounded-lg w-64"/> 
                    </div>
                </div>

                <div class="mx-8 mt-4">
                        <div class="text-xs mb-1">
                            MESSAGE
                        </div>
                        <input class="border-solid border-2 border-black p-2 rounded-lg w-full h-32"/> 
                </div>

                <div class=" ml-8 mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-lg border border-transparent bg-blue-100 px-8 py-3 text-sm font-medium text-white bg-purple"
                    @click="closeModal"
                  >
                    SEND
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
  