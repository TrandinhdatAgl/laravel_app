<template>
  <div id="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/register">Register</router-link>
      <a href="#" v-on:click.stop.prevent="logout">Logout </a>
      <router-link to="/" v-if="this.$store.state.user">
        {{ this.$store.state.user.name }}
      </router-link>
      <router-link to="/login" v-else>Login </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "NavComponent",

    methods: {
        logout() {
            let access_token = localStorage.getItem('access_token');
            let apiConfig = {
                headers: {
                    'Authorization': access_token
                }
            }
            axios.post('/api/logout', [], apiConfig).then(response => {
                console.log(response);
                

                this.$store.commit('auth/logoutAuth')
                this.$router.push("/login")

            }).catch(error => {
                // location.reload();
                console.log(error);
            });
        }
    },

}
</script>

<style>

</style>