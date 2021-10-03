<template>
  <div class="article-page">
    <router-link to='/' class='back-link'>← Back</router-link>
    <div class='article'>
      <h1>{{article.headline}}</h1>
      <div class="about-article">
        <h3>{{article.authors[0].byline}}</h3>
        <h3 class="article-date">{{this.date}}</h3>
      </div>
      <p class="full-article" v-html="article.body"></p>
    </div>
    <SideBar />
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
  padding: 50px 100px;
  width: 70%;
}
.article-date {
  margin-left: 20px;
}
.article-page {
  display: flex;
}
.back-link {
  margin: 20px;
  text-decoration: none;
  font-size: 1.2em;
}
</style>