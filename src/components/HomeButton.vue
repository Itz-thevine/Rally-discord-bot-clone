<script setup>
   const props = defineProps(['title'])
</script>

<template>
   <div role="button" class="bg-gradient-to-b to-red-700 from-red-600 px-5 py-2 text-white rounded-full hover:bg-gradient-to-b hover:from-red-700 hover:to-red-600 flex justify-center items-center">
        {{props.title}}
    </div>
</template>
