import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCheck, faXmark, faRotate, faPlus, faCaretDown, faSun, faBars, faHouseUser, faNewspaper, faPenToSquare, faThumbtack, faLink, faChevronRight, faMoon  } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser, faBell } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCheck, faXmark, faCircleUser, faRotate, faPlus, faCaretDown, faSun, faBell, faBars, faHouseUser, faNewspaper, faPenToSquare, faThumbtack, faLink, faChevronRight, faMoon)




// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: 'index' */ './views/Index.vue')
    },
    {
      path: '/:dashboard',
      name: 'Dashboard',
      component: () => import(/* webpackChunkName: 'Dashboard' */ './layout/Dashboard.vue'),
      children: [
        {
          path: 'home', 
          component: ()=> import(/* webpackChunkName: 'Home' */ './views/Home.vue'),
        },
        {
          path: 'commands',
          component: () => import/* webpackChunkName: 'Command' */ ('./views/Commands.vue')
        },
        {
          path: 'features',
          component: () => import('./views/FutureRequest.vue')
        },
        {
          path: 'logs',
          component: () => import('./views/Log.vue')
        },
        {
          path: 'deeplink',
          component: () => import('./views/Deeplink.vue')
        },
      ]
    },
    
  ]
})

// pinia instance 
const pinia = createPinia();



const app = createApp(App)
app.use(pinia);
app.use(router);
app.use(VueApexCharts);
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')

