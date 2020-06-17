import VueRouter from 'vue-router'


import Home from '@/views/home'
import Register from '@/views/register'
import Results from '@/views/results'


const Router = new VueRouter({
  routes: [
    { path: '/register', component: Register },
    {path: '/results', component: Results },    
    { path: '/', component: Home },
  ]

}) 

export default Router
