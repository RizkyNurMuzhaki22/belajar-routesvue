import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "../views/Home.vue"; 
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Produk from "../views/Produk.vue";
import Detail from "../views/Detail.vue";
import Kategori from "../views/Kategori.vue";
import DetailKategori from "../views/DetailKategori.vue"

import Login from "../views/Login.vue";
import { users } from "../assets/User";

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = users.find((user) => user.isLoggedIn == true);
      if (loggedInUser) {
        next();
      } else{
        next("/login");
      }
    },
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;