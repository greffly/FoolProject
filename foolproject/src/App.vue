<template>
  <div id="app">
    <div class="header">
      <router-link class="header-title" to="/"><h1>Motley Money Review</h1></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-title {
  color: white;
  text-decoration: none;
}
</style>
