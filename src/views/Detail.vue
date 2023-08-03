<template>
    <div v-if="detail == undifined">
        <h3>Mohon Maaf Detail Produk Dengan ID "{{ id_produk }}" Tidak Ditemukan</h3>
        </div>
        <div v-else>
        <h1>{{ detail.nama }}</h1>
        <h4>Harga : {{  detail.harga }}</h4>
        <h4>Deskripsi : {{ detail.deskripsi }}</h4>
    </div>
</template>
<script>
import { produk } from '../assets/Produk';

export default {
    props: [
        "id_produk"
    ],
    setup(props){
        const detail = produk["produk"].find(function(item){
            return item.id == props.id_produk;
        });
        return{
            detail
        }
    }
}

</script>