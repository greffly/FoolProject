<template>
  <div>
    <div class="actions">
      <!-- sortByDate is defaulted to true, and clicking the button toggles it to false, then back to true etc. Based on
      the value of that variable, the text of the button is set dynamically. -->
    <button class="sort" name="sortByDate" v-on:click="sortByDate = !sortByDate">{{sortByDate ? '↓ Sort By Oldest' : '↑ Sort By Newest'}}</button>
      <div class="search-wrapper">
        <input type="text" v-model="search" class="article-search" placeholder="Search Articles"/>
      </div>
    </div>
    <div class="articles-grid">
      <div v-for="result in filteredOrSortedArticles" :key="result.uuid" class="result-list">
        <ArticleSummary :result="result" />
      </div>
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
    // setting the default for data
    return {
      count: '',
      results: [],
      search: '',
      sortByDate: true,
      stocks: []
    }
  },
  created() {
    // setting the data that comes back to results and also calling the gatherStocks function to set the stocks in the store.
    fetch('http://127.0.0.1:8000/content')
      .then(response => response.json())
      .then(results => this.results = results.results)
      .then(results => this.gatherStocks(results))
      .catch(error => console.log({error}));
  },
  computed: {
    // a function that handles both the filtering and sorting of articles
    filteredOrSortedArticles() {
      let filteredOrSortedResults = this.results;

      // if there is a search term, then filter through the results for articles with tags that match the serach term, and only return those articles.
      if (this.search != '' && this.search) {
        filteredOrSortedResults = filteredOrSortedResults.filter(result => {
          let tags = [];
          for (let i = 0; i < result.tags.length; i++) {
            tags.push(result.tags[i].slug.toLowerCase());
          }
          return tags.includes(this.search.toLowerCase())
        })
      }

      // sort the articles displayed by most recent if sortByDate is true, or oldest if false
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
    gatherStocks(results) {
    // the first for loop looks at the stocks associated with each article
      for(let i = 0; i < results.length; i++) {
        // the second for loop is necessary for articles with multiple stocks associated
        for(let n = 0; n < results[i].instruments.length; n++) {
          this.$store.state.stocks.push(results[i].instruments[n]);
        }
      }
    }
  }
}
</script>

<style scoped>
/* styles specific to just this page, denoted by "scoped" */
.actions {
  display: flex;
  justify-content: flex-end;
  margin: 1em 2em;
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  row-gap: 3.1em;
  column-gap: 1.8em;
  padding: 0 2em 5em;
}
.article-search {
  font-size: 1.3em;
  line-height: 1.3em;
  font-family: 'Open Sans', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  border: none;
  padding: .3em;
}
/* the below styling targets the first article on the page so that it can be styled and layed out differently */
.result-list:first-child {
  grid-column: 1/span 3;
}
.result-list:first-child >>> div {
  display: flex;
}
.result-list:first-child >>> .image-container {
  width: 50%;
  padding-right: 2em;
}
.result-list:first-child >>> .article-image {
  padding-bottom: 0;
}
.sort {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  background-color: var(--background);
  color: var(--font);
  border: none;
  padding-right: 1em;
  cursor: pointer;
}
</style>