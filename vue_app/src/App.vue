<template>
  <div id="app">
    <nav-component></nav-component>
    <router-view></router-view>
  </div>
</template>

<script>
import NavComponent from "@/components/layouts/Nav";

export default {
  name: "App",
  components: {
    NavComponent
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  margin-bottom: 20px;
  a {
    padding: 10px;
    border: 1px solid #ddd;
    text-decoration: none;
    margin: 0 5px;
  }
  &:hover {
    color: lightgray;
  }
}
</style>
