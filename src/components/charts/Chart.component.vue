<template>
    <div class="example">
      <VueApexCharts width="100%" class="bg-slate-100 shadow-md flex dark:bg-slate-700 rounded-md" height="350" type="bar" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
  </template>
  
  <script>
  import VueApexCharts from 'vue3-apexcharts'
  
  export default {
    name: 'Chart',
    components: {
      VueApexCharts,
    },
    data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    },
  }
  </script>
  

  <style>
.apexcharts-toolbar{
    display: none;
}
.apexcharts-menu-icon{
    display: none;
}
</style>