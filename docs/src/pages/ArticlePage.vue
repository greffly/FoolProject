<template>
  <div class="article-page">
    <router-link to='/' class='back-link'>←Back</router-link>
    <div class='article'>
      <h1 class='article-headline'>{{article.headline}}</h1>
      <div class="about-article">
        <!-- I want to make sure the data has loaded before I look through. Resolves a console error on render. -->
        <h3>{{article.authors && article.authors[0].byline}}</h3>
        <h3 class="article-date">{{this.date}}</h3>
      </div>
      <p class="full-article" v-html="article.body"></p>
      <textarea name="comments" class="comments" rows="10" placeholder="What did you think of that article? Tell us.">
      </textarea>
      <button class="button">Send</button>
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
      // set the current article to the result sent from the home page
      this.article = this.result;
      // makes the date human readable
      this.date = new Date(this.result.publish_at).toDateString();
    }
  },
}
</script>

<style scoped>
.about-article {
  display: flex;
  margin-bottom: 2em;
}
.article {
  padding: 2.8em 7em;
  width: 75%;
}
.article-date {
  margin-left: 1.7em;
}
.article-headline {
  margin-bottom: 0;
}
.article-page {
  display: flex;
}
.back-link {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  color: var(--accent);
  margin: 1em 0 0 1em;
  text-decoration: none;
  height: 100%;
  position: sticky;
  top: 125px;
  bottom: 0;
}
.comments {
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  padding: .5em;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
.full-article >>> a {
  color: var(--accent);
}
.sidebar {
  width: 25%;
  height: 100%;
  position: sticky;
  top: 160px;
}
</style>