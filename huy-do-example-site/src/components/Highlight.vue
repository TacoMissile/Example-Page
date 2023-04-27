<script setup lang="ts">

    interface Props {
        emptySpaces: number
        textInput: string
    }

    const props = defineProps<Props>()

    
</script>

<template>
    <div class="relative">
    <p> {{ textInput }} </p>
        <div class="absolute bottom-1.5 -left-1">
        <p>
            <div class="relative -z-50 bg-orange text-white/[0] select-none text-sm flex flex-row">
                <div class="" v-for="n in emptySpaces">
                    &nbsp
                </div>
            </div>
        </p>
        </div>
    </div>
</template>