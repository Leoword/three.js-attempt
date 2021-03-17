<template>
  <div id="app">
    <div id="nav">
      <router-link to="/camera/orthographic">正交投影照相机</router-link>
      <router-link to="/camera/perspective">透视投影照相机</router-link>
      <router-link to="/geometry/cube">立方体</router-link>
      <router-link to="/geometry/plane">平面</router-link>
      <router-link to="/geometry/sphere">球体</router-link>
      <router-link to="/geometry/circle">圆形</router-link>
      <router-link to="/geometry/cylinder">柱体</router-link>
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
