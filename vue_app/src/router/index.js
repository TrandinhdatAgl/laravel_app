import { createWebHistory, createRouter } from "vue-router";

import LoginComponent from "@/components/Login";
import RegisterComponent from "@/components/Register";
import DashboardComponent from "@/components/Dashboard";
import AboutComponent from "@/components/About";


const routes = [
    {
        name: "login",
        path: "/login",
        component: LoginComponent,
        meta: {
            // middleware: "guest",
            title: "Login"
        }
    },
    {
        name: "register",
        path: "/register",
        component: RegisterComponent,
        meta: {
            // middleware: "guest",
            title: "Register"
        }
    },
    {
        name: "about",
        path: "/about",
        component: AboutComponent,
        meta: {
            // middleware: "guest",
            title: "Login"
        }
    },
    {
        name: "dashboard",
        path: '/',
        component: DashboardComponent,
        meta: {
            title: "Dashboard"
        }
    }
]

var router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
