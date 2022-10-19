import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCheck, faXmark, faRotate, faPlus, faCaretDown, faSun, faBars  } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser, faBell } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCheck, faXmark, faCircleUser, faRotate, faPlus, faCaretDown, faSun, faBell, faBars)




// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./layout/Dashboard.vue'),
      children: [
        {
            path: '/', 
            redirect: {name: 'Home'}
        },
        {
            path: '/home', 
            name: 'Home',
            component: ()=> import('./views/Home.vue'),
        }
      ]
    },
    {
      path: '/user/:id',
      name: 'UserSingle',
      props: true,
      component: () => import('./views/UserSingle.vue')
    }
  ]
})

const app = createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon).mount('#app')
