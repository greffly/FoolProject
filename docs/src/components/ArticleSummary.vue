<template>
  <div class="article">
    <div class="image-container">
      <img class="article-image" :src="result.images[0].image" :alt="result.images[0].name"/>
    </div>
    <div class="article-details">
      <!-- passing the API data and the path name through route params -->
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
  }
}
</script>

<style scoped>
.article {
  padding: 1.5em 1.5em 0;
  height: 100%;
  background-color: white;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
.article-details {
  display: flex;
  flex-direction: column;
}
.article-image {
  width: 100%;
  height: 300px;
  background-size: contain;
  object-fit: cover;
  object-position: 50% 50%;
  padding-bottom: 1em;
}
.article-pitch >>> a {
  color: var(--accent);
}
.headline {
  text-decoration: none;
}
.headline >>> h2 {
  color: var(--title);
  margin: 0;
}
.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>