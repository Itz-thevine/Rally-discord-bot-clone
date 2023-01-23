import { ref } from 'vue';

export default function useTheme() {
    const currentTheme = ref('light');

    function toggleTheme() {
        if (currentTheme.value === 'dark') {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }

    return {
        toggleTheme,
        currentTheme,
    };
}
