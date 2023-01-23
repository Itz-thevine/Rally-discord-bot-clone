import { defineStore } from "pinia";
import { ref } from "vue";

export const userModeStore = defineStore('mode', ()=> {
    const displayMode = ref(false);

    function toggleMode () {
        displayMode.value = !displayMode.value
        
    }
    

    return {displayMode, toggleMode}
})  