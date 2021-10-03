<template>
  <div class="article">
    <img class="article-image" :src="result.images[0].image" :alt="result.images.image"/>
    <router-link :to="{name: 'ArticlePage', params: {result: result, path: result.path}}" class="headline"><h2>{{ result.headline }}</h2></router-link>
    <p class="article-pitch" v-html="result.pitch.text"></p>
  </div>
</template>

<script>
export default {
  name: 'ArticleSummary',
  props: {
    result: Object
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
  background-color: whitesmoke;
  text-align: left;
}

.article-image {
  width: 100%;
  height: 300px;
}

.article-pitch >>> a {
  color: green;
}

.headline {
  text-decoration: none;
}
</style>