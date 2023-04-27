<script setup lang="ts">
    import Highlight from './Highlight.vue'
    import HomeCard from './HomeCard.vue'
    import HomeExploreButton from './HomeExploreButton.vue';
</script>

<template>
    <div class="mx-12">
        <div class="text-purple text-7xl m-16 w-1/2">
          <div class="font-bold">We Help you &nbsp</div>
         <div>to grow your</div> 
         <Highlight :emptySpaces="78" textInput="Business"/>
        </div>
        <div class="text-purple text-xl w-1/3">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
    </div>

    <div class="relative">
        <p>
            <div class="my-64 rounded-tr-full bg-blue-light w-11/12 h-max">
                    <div class="text-5xl text-purple text-center py-24">
                        <div class="font-bold">What We Do</div> 
                        <div>For Your <Highlight :emptySpaces="60" textInput="Business"/> </div>
                    </div>
                    <div class="pb-24 mx-12 flex-row flex gap-12">
                        <HomeCard imageURLInput="icons/website-icon.svg" textInput="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." headerInput="WEBSITE DESIGN"/>
                        <HomeCard imageURLInput="icons/website-icon.svg" textInput="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." headerInput="WEBSITE DESIGN"/>
                        <HomeCard imageURLInput="icons/website-icon.svg" textInput="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." headerInput="WEBSITE DESIGN"/>
                        <HomeCard imageURLInput="icons/website-icon.svg" textInput="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." headerInput="WEBSITE DESIGN"/>
                    </div>
            </div>
        </p>
        <div class="absolute -bottom-12 -right-8 -z-10">
            <img class="rotate-180 " src="../assets/graphics/ellipse.svg"/>
        </div>
    </div>

    <div class="mx-12 mb-12 flex flex-row text-purple">
        <img class="float-left" src="../assets/graphics/about-graphics.webp"/>
        <div>
            <div class="ml-12 mt-32 text-5xl w-96">
                <div class="font-bold">About Us</div>
                <div class="flex">
                    <div>Fake or &nbsp</div> 
                    <Highlight :emptySpaces="27" textInput=" Real"/>  
                </div>
            </div>
            <div class="mx-12 mt-10">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                <br>
                <button class="bg-purple text-white p-4 rounded-xl mt-6 w-48">
                    EXPLORE MORE
                </button>
            </div>
        </div>
    </div>

    <div class="bg-purple text-white h-40 flex rounded-tr-full">
        <div class="text-left pt-8 justify-left w-2/6 ml-8">
            <div class="font-serif text-3xl w-max">
                Dream Agency
            </div>
            <br>
            <div class="text-sm" w-max>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </div>
        </div>

        <div class="text-center mt-12 mx-16">
            <div class="text-left font-bold text-lg">GET IN TOUCH</div>
            <div><HomeExploreButton class="mt-4 inset-0"/></div>
        </div>
    </div>
</template>
