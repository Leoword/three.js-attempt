<template>
  <div id="app">
    <div id="nav">
      <div>
        <span>three.js形状定义</span>
        <router-link to="/camera/orthographic">正交投影照相机</router-link>
        <router-link to="/camera/perspective">透视投影照相机</router-link>
        <router-link to="/geometry/cube">立方体</router-link>
        <router-link to="/geometry/plane">平面</router-link>
        <router-link to="/geometry/sphere">球体</router-link>
        <router-link to="/geometry/circle">圆形</router-link>
        <router-link to="/geometry/cylinder">柱体</router-link>
        <router-link to="/geometry/hedron">多面体</router-link>
        <router-link to="/geometry/torus">圆环</router-link>
        <router-link to="/geometry/torusKnot">圆环结</router-link>
        <router-link to="/geometry/text">字体</router-link>
        <router-link to="/geometry/custom">自定义</router-link>
      </div>
      <div>
        <span>three.js材质定义</span>
        <router-link to="/material/color">材质散射</router-link>
        <router-link to="/material/ambient">材质环境光散射</router-link>
        <router-link to="/material/emissive">材质自发光</router-link>
        <router-link to="/material/image">材质图片</router-link>
        <router-link to="/animation/basic">简易动画</router-link>
        <router-link to="/animation/complex">复杂动画</router-link>
      </div>
      <div>
        <span>three.js光与影定义</span>
        <router-link to="/light/ambient">环境光</router-link>
        <router-link to="/light/point">点光源</router-link>
        <router-link to="/light/directional">平行光</router-link>
        <router-link to="/light/spot">聚光灯</router-link>
      </div>
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
