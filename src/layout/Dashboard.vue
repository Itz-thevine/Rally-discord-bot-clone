<script setup>
    import { ref, watch, onMounted, onUnmounted } from 'vue'

    // get the windows width and control the page responsiveness
    const  WindowSizeX = ref(window.innerWidth)
    const mobileNav = ref(
        WindowSizeX.value < 1024 ? false : true
    )
        
    onMounted(()=> window.addEventListener('resize', ()=> {
        WindowSizeX.value = window.innerWidth;
    }))
    onUnmounted(()=> window.addEventListener('resize', () => {
        WindowSizeX.value = window.innerWidth;    
    }))

    watch(WindowSizeX, ()=>{
        WindowSizeX.value < 1024 ? mobileNav.value = false : mobileNav.value = true
    })

    const toggleMenu = () => {
        mobileNav.value = !mobileNav.value
    }



</script>

<template>
    <div class="w-screen text-slate-400">
        <div v-if="mobileNav" class="min-h-screen w-1/4 lg:min-w-[250px] lg:w-80 bg-slate-800 drop-shadow-xl fixed  lg:flex">
            <div class="h-screen w-12 lg:w-16 bg-slate-700 drop-shadow-xl flex flex-col items-center pt-5" >
                <div class="bg-slate-800 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex ">
                    <font-awesome-icon icon="fa-regular fa-circle-user" class="w-14 h-14"/>
                </div>
                <div class="px-1 my-3 flex justify-center w-full">
                    <hr class="w-full h-1 bg-slate-800 border-none ">
                </div>
                <div  role="button" class="mb-3 bg-slate-800  w-10 h-10 lg:w-14 lg:h-14 hover:!text-red-400    rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-rotate" class="w-7 h-7"/>
                </div>
                <div role="button" class="mb-3 bg-slate-800 hover:!text-red-400   w-10 h-10 lg:w-14 lg:h-14 rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-plus" class="w-7 h-7  "/>
                </div>
            </div>
            <div class="p-5 flex items-center flex-col">
                <div class="lg:flex items-center hidden">
                    <div class="h-14 w-14 bg-slate-900 rounded-full">
                        <img src="https://rallybot.app/img/rallyLogo.459018c0.svg" alt="" class="h-14 w-14">
                    </div>
                    <p class="text-slate-500 ml-3 text-xl font-black">Rallybot</p>
                </div>
                <div class="mt-16 flex justify-start items-start w-full">
                    <p class="ml-4 text-slate-500 text-lg font-semibold">MAIN</p>

                </div>
            </div>
        </div>
        <div class="ml-0 lg:ml-80 fixed flex justify-between w-screen drop-shadow-xl">
            <div class="w-full bg-slate-800 lg:w-topMain h-20 px-5 lg:px-10 flex items-center justify-between">
                <div class="flex items-center md:mr-0">
                    <div @click="toggleMenu" class="flex lg:hidden mr-3" role="button">
                        <font-awesome-icon icon="fa-solid fa-bars" class=" w-6 h-6" />
                    </div>
                    <div class="bg-slate-900 w-8 h-8 md:w-11 md:h-11 rounded-full flex justify-center items-center">
                        <img src="https://rallybot.app/img/RLY.1014eb23.svg" alt="coin" class="h-10 w-10">
                    </div>
                    <div class="flex ml-2">
                        <div >
                            <p class="font-bold text-xs md:text-base">$RLY</p>
                            <p class="font-bold md:text-xl">$0.178</p>
                        </div>
                        <div class="flex items-center ml-1 text-red-400">
                            <font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" />
                            <p class="text-xs md:text-base">-3.20%</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="mr-3">
                        <font-awesome-icon icon="fa-solid fa-sun" class="w-4 h-4 md:w-5 md:h-5"/>
                    </div>
                    <div class="mr-3">
                        <font-awesome-icon icon="fa-regular fa-bell" class="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div class="">
                        <p class="md:text-xl font-bold">Login</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>