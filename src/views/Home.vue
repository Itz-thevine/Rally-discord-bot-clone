<template>
  <div class="px-5 h-[81vh] overflow-auto">

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
        <DropDown width="w-4/6" label="Creator coin"/>
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
    <div class="grid grid-rows-1 grid-flow-col gap-4 mt-6">
      <DropDown width="w-full" label="Chart"/>   
      <DropDown width="w-full" label="Period"/>
    </div>
   <div class="mt-5 mb-5 grid grid-rows-2  md:grid-rows-1 grid-flow-col gap-4">
    <Chart/>
    <Chart/>
   </div>
   <div class="mt-5">
    <chart/>
   </div>
  </div>
  <Footer/>
</template>
  
<script setup >
 
import { onMounted, ref, watch, watchEffect } from 'vue';
import Card from '../components/Cards.vue';
import DropDown from '../components/DropDown.vue';
import Chart from '../components/charts/Chart.component.vue'
import Footer from '../components/footer/Footer.vue'



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

// graph


    
</script>

