<template>
    <div class="container has-background-white mt-50 mr-20 ml-20">
      <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Crear una cuenta</h3><hr>
                <form action="#" @submit.prevent="register">
                    
                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Alex" v-model="name">
                        </div>
                    </div>

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
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
    

    export default {
        data() {
            return {
                name:'',
                email:'',
                password:'',
                error:''
            }
        },
        name: 'register-view',
        methods: {
            register(){
                this.error = ''
                if(this.name && this.email && this.password) {
                    const auth = getAuth();
                        createUserWithEmailAndPassword(auth, this.email, this.password)
                        .then((userCredential)=> {
                            const user = userCredential.user;
                            console.log(user)
                            this.$router.push({name: 'Dashboard'})
                        })
                        .catch((err)=>{
                            const errorCode = err.code;
                            console.log(errorCode)
                            this.errorMessage = err.message;
                            alert(this.err='contraseña no valida');
                            // ..
                        });
                } else{
                    this.error = 'Todos los campos son obligatorios'
                }
                    
            }
        } 
    }
        
</script>