<template>
<div id="app">
  <div id="nav">
     <router-link to="/">Dashboard</router-link>|
     <router-link to="/about">About</router-link>|
     <router-link to="/acount" v-if="this.$store.state.user">{{ this.$store.state.user.name }}</router-link>|
     <router-link to="/login">Login </router-link>
  </div>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
