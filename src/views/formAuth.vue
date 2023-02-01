<template>
    <div class="container has-background-white mt-50 mr-20 ml-20">
      <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3">Diligencie en formulario</h3><hr>
                <form action="#" @submit.prevent="register">
                    

                    <div class="field">
                        <label class="label">Nombre</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Andres" v-model="formData.first_name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Apellido</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Cifuentes" v-model="formData.last_name">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Celular</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="numero celular" v-model="formData.cellphone">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Fecha de nacimiento</label>
                        <div class="control">
                            <input class="input" type="date" v-model="formData.birth_day">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Tipo de documento</label>
                        <div class="control">
                            <div class="select is-fullwidth">
                                <select  v-model="formData.identification_type">
                                    <option value="dni">DNI</option>
                                    <option value="pasaporte">Pasaporte</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Numero de identidad</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="numero celular" v-model="formData.identification">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Despartamento</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Cundinamarca" v-model="formData.address_departament">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Provincia</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Cundinamarca" v-model="formData.address_province">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Ciudad</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Ibague" v-model="formData.address_city_or_district">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Direccion</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="jardin" v-model="formData.address_line1">
                        </div>
                    </div>

                
                    
                    <button type="submit" class="button is-primary">Enviar</button>

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
                    first_name: '',
                    last_name: '',
                    cellphone: '',
                    birth_day: null,
                    identification_type: '',
                    identification: '',
                    address_departament: '',
                    address_province: '',
                    address_city_or_district: '',
                    address_line1: ''
                },
                token:{},
                
                
            }
        },
        name: 'form-view',
        methods: {
            register() {
                
                
               
                axios.post('https://api-stage.carrazo.pe/auth/user_information/start', this.formData, {
                    headers: {
                        'Authorization': 'Bearer ' + this.token.tokens.access
                    }
                })
                .then(response => {
                    console.log(response);
                    this.$router.push({name: 'Dashboard'})
                })
                .catch(error => {
                    console.error(error);
                });
                
            }
        },
        mounted(){
            this.token= JSON.parse(localStorage.getItem('userData'))
            
            if (this.token.status.name === 'Initial') {
                this.$router.push({name: 'form'})
            } else {
                this.$router.push({name: 'Dashboard'})
            }
            
            
            
            
        
        } 
    }
        
</script>