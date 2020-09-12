<script>
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    'Navigation': Navigation
  }
}
</script>

<template>
  <div id="app">
    <div id="nav">
      <Navigation></Navigation>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  position: absolute;
  left: 0;
  width: 100%;;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #2c3e50;
}

a {
  color: black;
  text-decoration: none;
}
</style>

