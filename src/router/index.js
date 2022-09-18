/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login/login.vue'
import Register from '../pages/register/register.vue'
import Layout from '../pages/layout/layout.vue'
import Dashboard from '../pages/dashboard/dashboard.vue'
import Patients from '../pages/patients/patients.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Layout,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem("token") && !localStorage.getItem('user')) {
                return next({
                    name: 'login'
                })
            } else {
                next()
            }
        },
        children: [{
                path: '/',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: '/patients',
                component: Patients,
                beforeEnter: (to, from, next) => {
                    const authUser = JSON.parse(localStorage.getItem("user"))
                    if (authUser.role.role_name != 'doctor') {
                        return next({
                            name: 'dashboard'
                        })
                    } else {
                        next()
                    }
                },
            }
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active'
})

export default router