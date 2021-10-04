<template>
  <div class="article-page">
    <router-link to='/' class='back-link'>←Back</router-link>
    <div class='article'>
      <h1>{{article.headline}}</h1>
      <div class="about-article">
        <h3>{{article.authors[0].byline}}</h3>
        <h3 class="article-date">{{this.date}}</h3>
      </div>
      <p class="full-article" v-html="article.body"></p>
    </div>
    <SideBar class="sidebar"/>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
  name: 'ArticlePage',
  components: {
    SideBar
  },
  props: ['result'],
  data() {
    return {
      article: Object,
      date: String
    }
  },
  mounted() {
    if (this.result) {
      this.article = this.result;
      this.date = new Date(this.result.publish_at).toDateString();
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.about-article {
  display: flex;
}
.article {
  padding: 3em 5em;
  width: 75%;
}
.article-date {
  margin-left: 20px;
}
.article-page {
  display: flex;
}
.back-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  color: #138787;
  margin: 1em 0 0 1em;
  text-decoration: none;
  height: 100%;
  position: sticky;
  top: 125px;
  bottom: 0;
}
.sidebar {
  width: 25%;
  height: 100%;
  position: sticky;
  top: 160px;
}
</style>