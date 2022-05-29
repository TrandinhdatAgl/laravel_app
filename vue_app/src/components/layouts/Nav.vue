<template>
  <div id="nav">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/" v-if="this.$store.state.auth.authenticated">
       {{ this.$store.state.auth.user.name }}
      </router-link>
      <a href="#" v-on:click.stop.prevent="logout" v-if="this.$store.state.auth.authenticated">Logout </a>
      <router-link to="/login" v-else>Login </router-link>
    </div>
</template>

<script>

export default {
    name: "NavComponent",

    data() {
        return {
            authenticated: this.$store.state.auth.authenticated
        }
    },

    methods: {
        async logout() {
            await this.$store.dispatch('auth/logout', []);
            this.$router.push("/login")
        },
    },
}
</script>

<style>

</style>