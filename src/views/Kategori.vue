<template>
    <div class="flex flex-wrap">
    <div v-for="kategori in state" :key="kategori.id ">
<div class="max-w-sm m-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img v-bind:src="kategori.imgUrl" class="p-8 rounded-t-lg h-auto max-w-xs mx-auto"  alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ kategori.namaKategori }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
        <router-link class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" :to="{ name: 'DetailKategori' , params: { id_kategori: kategori.id}}">
            Cek
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </router-link>
    </div>
    </div>
</div>
  
    </div>
</template>
<!-- <template>
    <center>
        <h1>Kategori</h1>
    <div class="flex-container">
        <div  class="card">
            <img  width="200" alt="">
            <router-link class="container" >
                <h4><u>{{ kategori.namaKategori }}</u></h4>
            </router-link>
        </div>
    </div>
</center>

</template> -->
<script>
import { onMounted, reactive } from 'vue'
import { kategori } from '../assets/Kategori';

export default {
    setup(props, context)
{
    const state = reactive(kategori['kategori']);

    onMounted(() => {
    context.emit("id-menu", 5);
});
return{
    state
}
}
}

</script>
<!-- <style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2%;
    justify-content: center;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16 0 rgba(0,0,0, 0.2);
}
.container {
    padding: 2px 2px;
}
img{
    border-radius: 8px;
    max-width: 200px;
    max-height: 100px;
}
</style> -->