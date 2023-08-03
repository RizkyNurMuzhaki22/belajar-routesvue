<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-gray-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-black-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Login</h1>
        <form @submit.prevent="login">
            <div class="mb-4">
                <label for="username" class="block font-medium">Username :</label>
                <input type="text" id="username" v-model="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required>
            </div>
            <div class="mb-4">
                <label for="password" class="block font-medium">Password :</label>
                <input type="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="* * * * *" required>
            </div>
            <div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </div>
        </form>
    </div>
 </div>
</div>
       
    </section>
</template>
<script>
import { users } from "../assets/User";

export default {
    data(){
        return{
            username: '',
            password: '',
        };
    },
    methods: {
        login(){
            const foundUser = users.find(user => user.username === this.username && user.password === this.password);
            if (foundUser){
                alert("Login Berhasil !");
                this.$router.push('/produk')
            } else{
                alert("Username atau Password salah !")
            }
        }
    }
}
</script>