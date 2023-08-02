<template>
    <center>
        <h1>Kategori</h1>
    <div class="flex-container">
        <div v-for="kategori in state" :key="kategori.id" class="card">
            <img v-bind:src="kategori.imgUrl" width="200" alt="">
            <router-link class="container" :to="{ name: 'DetailKategori' , params: { id_kategori: kategori.id}}">
                <h4>{{ kategori.namaKategori }}</h4>
            </router-link>
        </div>
    </div>
</center>

</template>
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
<style scoped>
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
</style>