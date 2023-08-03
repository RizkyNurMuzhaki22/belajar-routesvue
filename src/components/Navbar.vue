<template>
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign Up</button>
      </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <router-link class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 {active:rl_1}" :to="{ name: 'Home'}" aria-current="page">Home</router-link>
      </li>
      <li>
        <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {active:rl_2}" :to="{ name: 'Contact'}">Contact</router-link>
      </li>
      <li>
        <router-link  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {active:rl_3}" :to="{ name: 'About'}">About</router-link>
      </li>
      <li>
        <router-link  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {active:rl_4}" :to="{ name: 'Produk'}">Produk</router-link>
      </li>
      <li>
        <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 {active:rl_5}" :to="{ name: 'Kategori'}">Kategori</router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</template>
<script>
import {ref } from 'vue'
export default{
    props : {
        idMenu : Number,
    },
    setup(props){
        const rl_1 = ref(false);
        const rl_2 = ref(false);
        const rl_3 = ref(false);
        const rl_4 = ref(false);
        const rl_5 = ref(false);

        if(props.idMenu==1){
            rl_1.value = true;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu==2){
            rl_1.value = false;
            rl_2.value = true;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu==3){
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = true;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu==4){
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = true;
            rl_5.value = false;
        }
        else if (props.idMenu==5){
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = true;
        }

        return{
            rl_1,
            rl_2,
            rl_3,
            rl_4,
            rl_5
        }
    }
}
</script>