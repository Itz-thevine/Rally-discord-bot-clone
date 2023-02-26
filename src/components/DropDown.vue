<script setup>
import { onMounted, ref } from 'vue';


const dropOptions = ref(false);
const getDrop = ref();

const toggleDropOptions = (a) => {
    dropOptions.value = !a;
    console.log(dropOptions.value);
}

// this is a function that will be called when the component is mounted
// this closes the drop options when user clicks outside
onMounted(()=>{
window.addEventListener('click', (e) => {
        if (e.target != getDrop.value ){
        dropOptions.value = false;
        }
    })
})

const props =defineProps(['width', 'label', 'options', 'func'])

// const {func} = defineProps()

console.log(typeof props.func)
console.log(props.func)

</script>

<template>
     <div class="relative" :class="width">
          <p class="mb-1 font-bold">{{props.label}}</p>
          <button @click="toggleDropOptions(props.dropOptions)" ref="getDrop" class="bg-slate-100 focus:border-2 focus:border-red-400 dark:focus:border-2 dark:focus:border-red-400 drop-shadow-md border-slate-800 dark:border dark:border-slate-600 rounded-md dark:bg-slate-800 flex justify-between px-3 py-2 cursor-pointer w-full">
            <p class="font-bold">BTC</p>
            <p><font-awesome-icon icon="fa-solid fa-caret-down" class=" w-3 h-3 md:w-6 md:h-6" /></p>
          </button>
          <div ref="openCoin_list">
            <div v-if="dropOptions" class="bg-slate-100 z-50 dark:border dark:border-slate-600 absolute w-full max-h-[40vh] h-40 overflow-y-auto rounded-md dark:bg-slate-800 flex flex-col px-3 py-2 cursor-pointer mt-1">
              <div v-for="option in props.options" :key="option.key">
                <p :onClick="$store.dispatch('toggleCoin', option)">{{option.name}}</p>   
              </div>
            </div>
          </div>
        </div>
</template>