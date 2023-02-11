<template>
  <div class="px-5">

    <h2 class="mt-4 font-bold">Home <span style="color: red;"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span> Dashboard</h2>

    <div class="row lg:flex mt-4 justify-between pr-4">
      <div class=" col-sm-12 col-lg-6 text-slate-600 dark:text-slate-200 text-4xl font-bold ">
        Welcome, Anonymous! 
      </div>
      <div class="col-lg-6 mt-5 ">
        <div> 
          <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 text-xl font-bold">View Logs</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row md:justify-between md:items-end pr-4 mt-6">
        <div class="w-4/6 relative">
          <p class="mb-1 font-bold">Coin</p>
          <button @click="toggleOption(coinOptions, $event)" ref="getCoin" class="bg-slate-100 focus:border-2 focus:border-red-400 dark:focus:border-2 dark:focus:border-red-400 drop-shadow-md border-slate-800 dark:border dark:border-slate-600 rounded-md dark:bg-slate-800 flex justify-between px-3 py-2 cursor-pointer w-full">
            <p class="font-bold">BTC</p>
            <p><font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" /></p>
          </button>
          <div ref="openCoin_list">
            <div v-if="coinOptions" class="bg-slate-100 dark:border dark:border-slate-600 absolute w-full h-[50vh] overflow-y-auto rounded-md dark:bg-slate-800 flex flex-col px-3 py-2 cursor-pointer mt-1">
              <p @click="keep()">BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
            </div>
          </div>
        </div>
        <div class="hidden md:flex">
          <button type="button " class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2  mb-0 text-xl font-bold">Refresh</button>
        </div>
        <div class="hidden md:flex">
          <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 mb-0 text-xl font-bold">Default</button>
        </div>
    </div>
    <div class="grid grid-rows-4 md:grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 mt-5">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between md:items-end pr-4 mt-6">
        <div class="w-3/6 relative">
          <p class="mb-1 font-bold">Chart</p>
          <button @click="toggleOption(coinOptions, $event)" ref="getChart" class="bg-slate-100 focus:border-2 focus:border-red-400 dark:focus:border-2 dark:focus:border-red-400 drop-shadow-md border-slate-800 dark:border dark:border-slate-600 rounded-md dark:bg-slate-800 flex justify-between px-3 py-2 cursor-pointer w-full">
            <p class="font-bold">BTC</p>
            <p><font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" /></p>
          </button>
          <div ref="openCoin_list">
            <div v-if="coinOptions" class="bg-slate-100 dark:border dark:border-slate-600 absolute w-full h-[50vh] overflow-y-auto rounded-md dark:bg-slate-800 flex flex-col px-3 py-2 cursor-pointer mt-1">
              <p @click="keep()">BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
            </div>
          </div>
        </div>
        <div class="w-3/6 relative">
          <p class="mb-1 font-bold">Period</p>
          <button @click="toggleOption(coinOptions, $event)" ref="getPeriod" class="bg-slate-100 focus:border-2 focus:border-red-400 dark:focus:border-2 dark:focus:border-red-400 drop-shadow-md border-slate-800 dark:border dark:border-slate-600 rounded-md dark:bg-slate-800 flex justify-between px-3 py-2 cursor-pointer w-full">
            <p class="font-bold">BTC</p>
            <p><font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" /></p>
          </button>
          <div ref="openCoin_list">
            <div v-if="coinOptions" class="bg-slate-100 dark:border dark:border-slate-600 absolute w-full h-[50vh] overflow-y-auto rounded-md dark:bg-slate-800 flex flex-col px-3 py-2 cursor-pointer mt-1">
              <p @click="keep()">BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
              <p>BTC</p>
            </div>
          </div>
        </div>
      </div>

   
</div>
</template>
  
<script setup >
 

import { onMounted, ref, watch, watchEffect } from 'vue';
import Card from '../components/Cards.vue';



// set a constant for the option listener and create a function to control it
const coinOptions = ref(false);
const toggleOption = (value, e) => {
  coinOptions.value = !value;
}

// it outside of the the option function is clicked it closes the option function
const getCoin = ref();
const getChart = ref();
const getPeriod = ref();
const openCoin_list = ref()
onMounted(()=>{

  window.addEventListener('click', (e) => {
      if (e.target != getCoin.value ){
        coinOptions.value = false;
      }
  })
})

const keep =() =>{
  coinOptions.value = true;
  console.log('I was acessed');
}


</script>