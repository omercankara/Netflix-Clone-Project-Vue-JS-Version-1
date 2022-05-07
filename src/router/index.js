
import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import home from "../views/homePage.vue"
import regPage from "../components/regPage.vue"
import accountPage from "../components/accountPage.vue"
import accountForm from "../components/accountForm.vue"
import local from "../components/localPage.vue"
import planForm from "../components/planForm.vue"

const routes = [
        {
                path: '/login',
                name: 'loginPage',
                component: loginPage
        },

        {
                path: '/planform',
                name: 'planform',
                component: planForm
        },

        {
                path: '/accountPage',
                name: 'accountPage',
                component: accountPage
        },

        {
                path: '/accountForm',
                name: 'accountForm',
                component: accountForm
        },

        {
                path: '/regPage',
                name: 'regPage',
                component: regPage
        },

        {
                path: '/local',
                name: 'local',
                component: local
        },

        {
                path: '/',
                name: 'home',
                component: home
        },

]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes
})

export default router

