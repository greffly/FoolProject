<template>
  <div>
    <div class="actions">
    <button class="sort" name="sortByDate" v-on:click="sortByDate = !sortByDate">{{sortByDate ? '↑ Sort By Newest' : '↓ Sort By Oldest'}}</button>
      <div class="search-wrapper">
        <input type="text" v-model="search" class="article-search" placeholder="Search Articles"/>
      </div>
    </div>
    <div class="articles-grid">
      <ul v-for="result in filteredOrSortedArticles" :key="result.uuid">
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
      count: String,
      sortByDate: true
    }
  },
  created() {
    fetch('http://127.0.0.1:8000/content')
      .then(response => response.json()).then(results => this.results = results.results).catch(error => console.log({error}));
  },
  computed: {
    filteredOrSortedArticles() {
      let filteredOrSortedResults = this.results;

      if (this.search != '' && this.search) {
        filteredOrSortedResults = filteredOrSortedResults.filter(result => {
          let tags = [];
          for (let i = 0; i < result.tags.length; i++) {
            tags.push(result.tags[i].slug);
          }
          return tags.includes(this.search.toLowerCase())
        })
      }

      filteredOrSortedResults = filteredOrSortedResults.sort((a, b) => {
        if (this.sortByDate === true) {
          return Date.parse(b.publish_at) - Date.parse(a.publish_at);
        } else {
          return Date.parse(a.publish_at) - Date.parse(b.publish_at);
        }

      })

      return filteredOrSortedResults;
    },
  },
  methods: {
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
.sort {
  font-size: 1.3em;
  background-color: white;
  border: none;
  padding: 10px;
}
</style>