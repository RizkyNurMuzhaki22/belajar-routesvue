<template>
    <h1>Kategori</h1>
    <div class="flex-container">
        <div v-for="kategori in state" :key="kategori.id" class="card">
            <router-link class="container" :to="{ name: 'DetailKategori' , params: { id_kategori: kategori.id}}">
                <h4>{{ kategori.namaKategori }}</h4>
                <h4>{{ kategori.nid }}</h4>
            </router-link>
        </div>
    </div>
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
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0, 0.2);
}
.container {
    padding: 2px 16px;
}
</style>