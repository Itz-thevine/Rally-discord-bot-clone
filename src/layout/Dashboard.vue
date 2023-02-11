<script setup>
    import { ref, watch, onMounted, onUnmounted } from 'vue'
    import {useDark, useToggle} from "@vueuse/core"
    import axios from 'axios';

    import HeaderCoinCard from '../skeleton/HeaderCoinCard.vue';


    const isDark = useDark();
    const toggledDark = useToggle(isDark);


    

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
    
    let getCoin = ref([]);
    let getURL = ref('');

    // asynchronously get contents from the api
    onMounted( async () =>{
        const getData = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true');
        getURL.value = ('https://rallybot.app/img/rallyLogo.459018c0.svg');
        const {data:{ symbol, image:{large}, tickers } } = getData;
        const rate = tickers[0].converted_last.usd
        const rateSec = tickers[1].last

        // create a function that returns the color of the text and the percentage of difference between the coins levels
        const getCoinColor = (rate, rateSec) => {
            if (rate > rateSec) {
                return 'green'
            } else if (rate < rateSec) {
                return'red'
            } else {
                return 'black'
            }
        }
        const getCoinRate = (rate, rateSec) => {
            if (rate > rateSec) {
                return `+${((rate - rateSec) / rate).toFixed(3)}%`   
            }else{
                return `-${((rateSec - rate) / rate).toFixed(3)}%`
            }
        }

        const col = getCoinColor(rate, rateSec);
        const rateCol = getCoinRate(rate, rateSec);
        
        let dArray = {symbol, large, rate, col, rateCol};
        getCoin.value = dArray;
    })


    




</script>

<template>
    <div class="w-screen text-slate-900 dark:text-slate-400">
        <div v-if="mobileNav" class="min-h-screen w-[40%] min-w-[290px] flex z-20 lg:z-0 lg:min-w-[250px] lg:w-80 bg-slate-100 dark:bg-slate-800 drop-shadow-xl fixed  lg:flex">
            <div class="h-screen w-12 lg:w-16 bg-slate-50 dark:bg-slate-700 drop-shadow-xl flex flex-col items-center pt-5 px-[4px]" >
                <div class="bg-slate-200 dark:bg-slate-800 w-10 h-10 lg:w-14 lg:h-14 rounded-full flex ">
                    <font-awesome-icon icon="fa-regular fa-circle-user" class="w-14 h-14"/>
                </div>
                <div class="px-1 my-3 flex justify-center w-full">
                    <hr class="w-full h-1 bg-slate-200 dark:bg-slate-800 border-none ">
                </div>
                <div  role="button" class="mb-3 bg-slate-200 dark:bg-slate-800  w-10 h-10 lg:w-14 lg:h-14 hover:!text-red-400    rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-rotate" class="w-7 h-7"/>
                </div>
                <div role="button" class="mb-3 bg-slate-200 dark:bg-slate-800 hover:!text-red-400   w-10 h-10 lg:w-14 lg:h-14 rounded-full flex justify-center items-center">
                    <font-awesome-icon icon="fa-solid fa-plus" class="w-7 h-7  "/>
                </div>
            </div>
            <div class="py-5 pl-5 w-full flex items-start flex-col">
                <div class="lg:flex items-center hidden">
                    
                    <div v-if="getURL" class="h-14 w-14 bg-slate-200 dark:bg-slate-900 rounded-full">
                        <img src="https://rallybot.app/img/rallyLogo.459018c0.svg" alt="" class="h-14 w-14">
                    </div>
                    <div v-else>
                        <div role="status" class="animate-pulse">
                            <div class="bg-slate-300 w-10 h-10 lg:w-14 lg:h-14 rounded-full"></div>
                        </div>
                    </div>

                    <p class=" text-slate-900 dark:text-slate-500 ml-3 text-xl font-black">Rallybot</p>
                </div>
                <div class="ml-4 mt-24 lg:mt-16 flex  text-slate-800 dark:text-slate-500 flex-col justify-start items-start w-full h-screen">
                    <p class="  text-lg font-semibold">MAIN</p>
                    <ul class="">
                        <li role="button" class="text-lg mt-4">
                            <router-link to="/dashboard/home" active-class="bg-slate-200 dark:bg-slate-900 px-3 py-2 text-red-500 rounded-md">
                                <font-awesome-icon icon="fa-solid fa-house-user" class='mr-4'/>
                                Dashboard
                            </router-link>
                        </li>
                        <li role="button" class="text-lg mt-4">
                            <router-link to="/dashboard/commands"  active-class="bg-slate-200 dark:bg-slate-900 px-3 py-2 text-red-500 rounded-md">
                                <font-awesome-icon icon="fa-solid fa-newspaper" class='mr-4'/>
                                Commands
                            </router-link>
                        </li>
                        <li role="button" class="text-lg mt-4">
                            <router-link to="/dashboard/features"  active-class="bg-slate-200 dark:bg-slate-900 px-3 py-2 text-red-500 rounded-md">
                                <font-awesome-icon icon="fa-solid fa-pen-to-square" class='mr-4'/>
                                Feature Requests
                            </router-link>
                        </li>
                    </ul>
                    <p class="pt-8">MISC</p>
                    <ul class="">
                        <li role="button" class="text-lg mt-4">
                            <router-link to="/dashboard/logs"  active-class="bg-slate-200 dark:bg-slate-900 px-3 py-2 text-red-500 rounded-md">
                                <font-awesome-icon icon="fa-solid fa-thumbtack" class='mr-4'/>
                                Logs
                            </router-link>
                        </li>
                        <li role="button" class="text-lg mt-4">
                            <router-link to="/dashboard/deeplink"  active-class="bg-slate-200 dark:bg-slate-900 px-3 py-2 text-red-500 rounded-md">
                                <font-awesome-icon icon="fa-solid fa-link" class='mr-4'/>
                                Deeplink
                            </router-link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ml-0 fixed flex flex-col z-40 items-start lg:items-end w-screen drop-shadow-xl">
            <div class="w-full lg:relative lg:z-0 lg:w-3/4 bg-slate-100 dark:bg-slate-800 lg:w-topMain h-20 px-2 lg:px-10 flex items-center justify-between">

                <div class="flex items-center md:mr-0">
                    <div @click="toggleMenu" class="flex lg:hidden mr-3" role="button">
                        <font-awesome-icon icon="fa-solid fa-bars" class=" w-6 h-6" />
                    </div>
                    
                    <div v-if="getCoin.large" class="flex items-center justify-center">
                        <div class="bg-slate-300 dark:bg-slate-900 w-8 h-8 md:w-11 md:h-11 rounded-full flex justify-center items-center">
                            <img :src="getCoin.large" alt="coin" class="h-5 w-5 lg:h-10 lg:w-10 ">
                        </div>
                        
                        <div class="flex ml-2">
                            <div>
                                <p class="font-bold text-xs md:text-base">{{ getCoin.symbol }}</p>
                                <p class="font-bold md:text-xl">${{getCoin.rate}}</p>
                            </div>
                            <div class="flex items-center ml-1" :class="getCoin.col">
                                <font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" />
                                <p class="text-xs md:text-base">{{getCoin.rateCol}}</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <HeaderCoinCard/>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="mr-3" @click="toggledDark()">
                        <font-awesome-icon icon="fa-solid fa-moon" class="w-4 h-4 md:w-5 md:h-5 cursor-pointer" v-if="isDark"/>
                        <font-awesome-icon  icon="fa-solid fa-sun" class="w-4 h-4 md:w-5 md:h-5 cursor-pointer" v-else/>
                    </div>
                    <div class="mr-3">
                        <font-awesome-icon icon="fa-regular fa-bell " class="w-4 h-4 md:w-5 md:h-5 cursor-pointer" />
                    </div>
                    <div class="">
                        <p class="md:text-xl font-bold cursor-pointer">Login</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="w-full flex fixed mt-20 z-[-1] bg-slate-50 dark:bg-slate-900 justify-start lg:justify-end   ">
            <div class=" w-full lg:w-3/4  min-h-screen">
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<style>
    .green{
        color: green ;
    }
    .red{
        color: red ;
    }
</style>