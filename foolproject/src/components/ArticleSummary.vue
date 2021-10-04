<template>
  <div class="article">
    <div class="image-container">
      <img class="article-image" :src="result.images[0].image" :alt="result.images.image"/>
    </div>
    <div class="article-details">
      <router-link :to="{name: 'ArticlePage', params: {result: result, path: result.path}}" class="headline"><h2>{{ result.headline }}</h2></router-link>
      <p class="article-pitch" v-html="result.pitch.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSummary',
  props: {
    result: Object,
    stocks: Array
  },
  methods: {
  }
}
</script>

<style scoped>
h2, li {
  color: black;
}
.article {
  padding: 20px 20px 0;
  height: 100%;
  background-color: white;
  text-align: left;
}
.article-details {
  display: flex;
  flex-direction: column;
}
.article-image {
  width: 100%;
  max-width: 600px;
  height: 300px;
  padding-bottom: 1em;
}
.article-pitch >>> a {
  color: green;
}
.headline {
  text-decoration: none;
}
.headline>>>h2 {
  margin: 0;
}
.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>