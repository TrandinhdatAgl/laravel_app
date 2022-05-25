<template>
<div>
  <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
          <router-link :to="{name:'login'}" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
      </li>
  </ul>
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
