<template>
  <div id="app">
    <div id="nav">
      <router-link to="/line">折线</router-link>
      <router-link to="/text">文字</router-link>
      <router-link to="/triggle">三角形</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}

#nav {
  padding: 10px 0 20px;
}

#nav a {
  margin-left: 10px;
}
</style>
