import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageShowThread from "@/components/PageShowThread.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import sourceData from "@/data.json"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/thread/:id',
            name: 'ShowThread',
            component: PageShowThread,
            props: true,
            beforeEnter:(to)=>
            {
                const threadExists = sourceData.threads.find(thread=> thread.id === to.params.id)
                if (!threadExists)
                    return {
                        name: 'NotFound',
                        params: {
                            pathMatch : to.path.substring(1).split("/")
                        },
                        query: to.query,
                        hash: to.hash
                    }
            }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: PageNotFound,

        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
