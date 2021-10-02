<template>
  <div>
    <div class="articles-grid">
      <ul v-for="result in results" :key="result.uuid">
        <ArticleSummary :result="result" />
      </ul>
    </div>
  </div>
</template>

<script>
import ArticleSummary from '../components/ArticleSummary.vue'

export default {
  name: 'Home',
  components: {
    ArticleSummary
  },
  data () {
    return {
      results: [],
      count: String
    }
  },
  created() {
    fetch('http://127.0.0.1:8000/content')
      .then(response => response.json()).then(results => this.results = results.results).catch(error => console.log({error}));
  }
}
</script>

<style scoped>
h1, li {
  color: #42b983;
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  /* grid-auto-rows: 1fr; */
  row-gap: 20px;
}
</style>