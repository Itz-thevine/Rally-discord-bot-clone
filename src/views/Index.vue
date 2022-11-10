<script setup>
    import HomeButton from '../components/HomeButton.vue'

</script>

<template>
    <div class="bg-gray-100 min-h-screen min-w-screen flex relative justify-center items-center">
        <div class="bg-gradient-to-r from-red-100 to-red-500 rotate-5 absolute z-10 h-[600px] w-[1000px] rounded-xl "></div>
        <div class="bg-white absolute z-20 h-[600px] w-[1000px] rounded-xl drop-shadow-xl py-6 px-10">
            <div class="flex w-full">
                <div class="bg-green-400 rounded-xl h-4 w-4 ml-3"></div>
                <div class="bg-yellow-400 rounded-xl h-4 w-4 ml-3"></div>
                <div class="bg-red-400 rounded-xl h-4 w-4 ml-3"></div>
            </div>
            <div class="py-7 px-10">
                <div class="flex w-full justify-between">
                    <div class="flex items-center">
                        <img src="https://rallybot.app/img/space.5424f731.png" class="w-10 h-10"  alt="">
                        <p class="font-black text-2xl ml-1">Rally</p>
                    </div>
                    <div class="flex items-center">
                        <p class="mr-3 cursor-pointer">Login</p>
                        <router-link to="/dashboard/home">
                            <HomeButton title="Dashboard"/>
                        </router-link>
                    </div>
                </div>
                <div class="px-5 mt-40">
                    <p class="text-7xl font-bold w-4/6">Creator Coin Discord bot</p>
                    <p class="text-xl mt-2">Made with love by the community</p>
                    <div class="">
                        <HomeButton title="Add" class="w-20 mt-3"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>