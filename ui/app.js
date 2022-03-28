const routes=[
    {path:'/home',component:home},
    {path:'/main',component:main},
    {path:'/qualitative',component:qualitative},
    {path:'/quantitative',component:quantitative},
    {path:'/independent_variable',component:independent_variable},
    {path:'/iv_level',component:iv_level},
    {path:'/dependent_variable',component:dependent_variable},
    {path:'/dv_level',component:dv_level},
    {path:'/agreement',component:agreement},
    {path:'/author',component:author},
    {path:'/authorid',component:authorid},
    {path:'/descriptive_statics',component:descriptive_statics},
    {path:'/research_questions',component:research_questions},
    {path:'/study_methods',component:study_methods},
    {path:'/sample',component:sample},
]

// https://router.vuejs.org/guide/#javascript
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')



// const app = new Vue({
//     router
// }).$mount('#app') // same id as index.html div id