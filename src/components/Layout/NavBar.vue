<template>
    <nav class="navbar shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <h3 class="title is-3">Carrazo<span class="has-text-primary">App</span></h3>
            </router-link>

            <a role="button" class="navbar-burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
            

            <div class="navbar-end">
                <div class="navbar-item">
                    <template v-if="user">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                            {{ user.email}}
                            </a>

                            <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Perfil
                            </a>
                            <router-link class="navbar-item" to="/dashboard">
                                Dashboard
                            </router-link>
                            <hr class="navbar-divider">
                            <a class="navbar-item" @click.prevent="logout">
                                Cerrar Sesion
                            </a>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="buttons">
                            <router-link class="button is-primary" to="/register">
                                <strong>Registrarme</strong>
                            </router-link>
                            <router-link class="button is-light" to="/login">
                                Iniciar sesion
                            </router-link>
                        </div>
                    </template>
                    
                </div>
            </div>
        </div>
    </nav>
</template>

<script>





export default {
    data() {
        return {
            isOpen: false,
            user: null
            
        }
    },
    methods: {
        toggleMenu() {
            const status = !this.isOpen
            this.isOpen = status
        }, 
        logout() {
            localStorage.removeItem("userData");
            this.user = null;
            this.$router.push({ name: "login" });
        },
        
    },
    mounted() {
        let data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            this.$router.push({name: 'Dashboard'})
            this.user = data;
        }else{
            this.$router.push({name: 'login'})
        }
        
    },
    watch:{
        user:{
            handler(newValue) {
                this.user = newValue
            },
            deep: true
        }
    }
    
}

</script>