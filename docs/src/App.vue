<template>
  <div id="app">
    <div class="header">
      <router-link class="header-title" to="/"><h1>— Motley Money Review —</h1></router-link>
    </div>
    <router-view/>
  </div>
</template>


<style>
/* default styling for the app */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap');
html, body {
  margin: 0;
}
:root {
  --background: #F2F2F2;
  --font: #4A4949;
  --title: #76323F;
  --accent: #265E75;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: var(--font);
  background-color: var(--background);
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
.button {
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  color: var(--title);
  border: none;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: .5em;
  margin-top: .5em;
  cursor: pointer;
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
.header-title {
  color: var(--title);
  text-decoration: none;
}
</style>
