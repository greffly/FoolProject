<template>
  <div>
    <div class="actions">
      <div class="search-wrapper">
        <input type="text" v-model="search" class="article-search" placeholder="Search Articles"/>
      </div>
    </div>
    <div class="articles-grid">
      <ul v-for="result in filteredList" :key="result.uuid">
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
      search: '',
      count: String
    }
  },
  created() {
    fetch('http://127.0.0.1:8000/content')
      .then(response => response.json()).then(results => this.results = results.results).catch(error => console.log({error}));
  },
  computed: {
    filteredList() {
      const filteredResults = this.results.filter(result => {
        let tags = [];
        for (let i = 0; i < result.tags.length; i++) {
          tags.push(result.tags[i].slug);
        }
        return tags.includes(this.search.toLowerCase())
      })
      return filteredResults.length > 0 ? filteredResults : this.results;
    }
  }
}
</script>

<style scoped>
h1, li {
  color: #42b983;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px 0;
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  row-gap: 20px;
}
.article-search {
  font-size: 1.5em;
  line-height: 1.5em;
}
</style>