<template>
    <div class="container has-background-white mt-50 mr-20 ml-20">
      <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Crear una cuenta</h3><hr>
                <form action="#" @submit.prevent="register">
                    
                
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="alexsmith@gmail.com" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
                        </div>
                    </div>
                    <p class="notification is-danger mt-10" v-if="password.length < 8 && password.length > 0">La contraseña es demasiado corta</p>

                    <div class="field">
                        <label class="label">Confirmar Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="confirmPassword">
                        </div>
                    </div>

                    <p class="notification is-danger mt-10" v-if="password !== confirmPassword && password.length > 0">Contraseñas no coinciden</p>
                    
                    <button type="submit" class="button is-primary">Registrarme</button>

                </form>
                <div class="notification is-danger mt-10" v-if="error">
                    {{ error }}
                </div>
            </div>
      </div>
    </div>
</template>

<script>
    
import axios from 'axios';

    

    export default {
        data() {
            return {
                formData:{
                    email:'',
                    password:''
                },
                password: '',
                confirmPassword: ''
                
            }
        },
        name: 'register-view',
        computed: {
            passwordMatch() {
            return this.password === this.confirmPassword
            }
        },
        methods: {

            register() {
                this.formData.email = this.email;
                this.formData.password = this.password;

                axios.post('https://api-stage.carrazo.pe/auth/singup', this.formData)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    this.error = error.message;
                })
                this.$router.push({name: 'login'})
            }
        } 
    }
        
</script>