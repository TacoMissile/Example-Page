<script setup lang="ts">

    import image from '../assets/icons/computer-icon.svg'

    interface Props{
        headerInput: string
        textInput: string
        imageURLInput: string
    }

    const props=defineProps<Props>()
</script>

<template>
    <div class="rounded-lg bg-white w-72 h-48 p-8 shadow-lg ">
        <img :src="(`src/assets/${imageURLInput}`)" />
        {{ headerInput }}
        <br>
        {{ textInput }}
    </div>
</template>
