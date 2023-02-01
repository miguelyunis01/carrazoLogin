<template >
    <template v-if="user">
        <h1 class="title has-text-centered mt-50"  >Bienvenido <span class="has-text-primary">{{ user.user_information.first_name }}</span></h1>
    <div class="is-flex is-justify-content-center is-align-content-center is-align-items-center">

        <img src="../assets/Carrazo.jpeg" alt="carro" class="box">
    </div>
    </template>
    <template v-else>
        <div>
            nada
        </div>
    </template>
    
    
</template>


<script>


export default {
    data() {
        return {
            user: null
        }
    },
    name: 'DashboardView',
    mounted() {
        let data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            this.user = data
            
        } else {
            this.$router.push({name: 'login'})
        }
    },
}


</script>