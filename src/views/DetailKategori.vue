<template>
    <div>
        <h1>Produk</h1>
        <div class="flex-container">
            <div v-for="produk in detail" :key="produk.id" class="card">
                <router-link class="container" :to="{name: 'Detail' , params: {id_produk: produk.id}}">
                    <h4>{{ produk.nama }}</h4>
                </router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
import { kategori } from '../assets/Kategori';
import { produk } from '../assets/Produk';

export default {
    props: [
        "id_kategori"
    ],
    setup(props){
        const detailkategori = kategori["kategori"].find(function(item){
            return item.id == props.id_kategori;
        });
        const detail = produk["produk"].filter(function(item){
            return item.id_kategori == props.id_kategori;
        });
        return{
            detailkategori,
            detail
        }
    }
}

</script>
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
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