<template>
  <div id="app">
    <div class="header">
      <router-link class="header-title" to="/"><h1>Motley Money Review</h1></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Open+Sans:wght@400&display=swap');
html, body {
  margin: 0;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #F8F8F8;
}
h1, h2, h3 {
  font-family: 'Open Sans', sans-serif;
}
h1 {
  font-size: 2.3em;
}
h2 {
  font-size: 2em;
}
.header {
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.header-title {
  color: #138787;
  text-decoration: none;
}
</style>
