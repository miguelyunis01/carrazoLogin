<template>
    <div class="container has-background-white mt-50 mr-20 ml-20">
      <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Iniciar sesion</h3><hr>
                <form action="#" @submit.prevent="login">
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="alexsmith@gmail.com" v-model="email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Contraseña</label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
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
    import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
    

    export default {
        data() {
            return {
                email: '',
                password:'',
                error:''
            }
        },
        name: 'login-view',
        methods: {
            login(){
                if( this.email && this.password) {
                    const auth = getAuth();
                        signInWithEmailAndPassword(auth, this.email, this.password)
                        .then((userCredential)=> {
                            this.$router.push({name: 'Dashboard'})
                            const user = userCredential.user;
                            console.log(user)
                            
                        })
                        .catch((err)=>{
                            const errorCode = err.code;
                            console.log(errorCode)
                            this.errorMessage = err.message;
                            this.error='usuario o contraseña incorrectos';
                            // ..
                        });
                } else{
                    this.error = 'Todos los campos son obligatorios'
                }
                    
            }
        } 
    }
        
</script>