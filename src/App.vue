<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script src="./app.js"></script>

<style lang="scss">
  @import '~assets/scss/main.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0;
}
</style>
