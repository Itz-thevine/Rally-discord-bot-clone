import { userModeStore } from "./modeStore"
import { ref, watch } from "vue"

export const userMode = () => {
    const { displayMode} = userModeStore()

    // initialize an object that has the various color variations that we want

    const dMode = ref()

   
        if (displayMode.value === false) {
            dMode.value = {
                colorOne : 'slate-900',
                colorTwo : 'slate-800',
                colorThree : 'slate-700',
                colorFour : 'slate-600',
                colorFive : 'slate-500',
            }
        }else{
            dMode.value = {
                colorOne : 'slate-300',
                colorTwo : 'slate-200',
                colorThree : 'slate-100',
                colorFour : 'slate-50',
                colorFive : 'white',
           }
        }

    return { dMode }
}