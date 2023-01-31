<template >
    <h1 class="title has-text-centered mt-50">Bienvenido <span class="has-text-primary">Usuario</span></h1>
    <div class="is-flex is-justify-content-center is-align-content-center is-align-items-center">

        <img src="../assets/Carrazo.jpeg" alt="carro" class="box">
    </div>
    
</template>

<script>
import { getAuth } from '@firebase/auth'

export default {
    data() {
        return {
            user: 'Miguel'
        }
    },
    name: 'DashboardView',
    methods:{
        created() {
            getAuth().onAuthStateChanged(user => {
                if(user) {
                    this.user = user
                } else {
                    this.user = 'Miguel'
                }
            })
            
        }
    }
}


</script>