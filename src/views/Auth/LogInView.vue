<template>
    <div class="container has-background-white mt-50 mr-20 ml-20">
      <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Iniciar sesion</h3><hr>
                <form action="#" @submit.prevent="login">
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="alexsmith@gmail.com" v-model="formData.email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="formData.password">
                        </div>
                    </div>

                    <button type="submit" class="button is-primary">Iniciar sesion</button>

                </form>
                <div class="notification is-danger mt-10" v-if="error">
                    {{ error }}
                </div>
            </div>
      </div>
    </div>
</template>

<script>
   import axios from 'axios'

    export default {
        data() {
            return {
                formData:{
                    email:'',
                    password:''
                },
                error:''
            }
        },
        name: 'login-view',
        methods: {
            login(){
            
                
                axios.post('https://api-stage.carrazo.pe/auth/login', this.formData)
                .then((response) => {
                    console.log(response.data)
                    localStorage.setItem('userData', JSON.stringify(response.data))
                    this.$router.push('/form')
                })
                .catch(error => {
                    this.error = error.message;
                })
                
            }
        } 
    }
        
</script>