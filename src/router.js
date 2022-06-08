import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Notas from "./components/Notas.vue";
import Respuestas from "./components/Respuestas.vue";

export const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/notas", component: Notas},
        {path:"/respuestas", component: Respuestas}
    ],
});
