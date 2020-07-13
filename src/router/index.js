import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "login" */ "../views/Login.vue")
    },
    {
        path: "/mis-clases",
        name: "StudentHome",
        component: () =>
            import(/* webpackChunkName: "StudentsHome" */ "../views/StudentsHome.vue")
    },
    {
        path: "/area/:id",
        name: "Class",
        component: () =>
            import(/* webpackChunkName: "Class" */ "../views/Class.vue")
    },
    {
        path: "/inicio",
        name: "TeacherHome",
        component: () =>
            import(/* webpackChunkName: "TeacherHome" */ "../views/TeacherHome.vue")
    },
    {
        path: "/grado/:id/:name",
        name: "Grade",
        component: () =>
            import(/* webpackChunkName: "Grade" */ "../views/Grade.vue")
    },
];

const router = new VueRouter({
    routes
});

export default router;
