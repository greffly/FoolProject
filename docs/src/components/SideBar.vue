<template>
  <div class="side-bar">
    <ul v-for="stock in stocks.slice(0,3)" :key="stock.instrument_id" class="stock">
      <p class="stock-company">{{stock.company_name}}</p>
      <p>TICK: {{stock.symbol}}</p>
      <a :href="stock.links.content">More Info</a>
    </ul>
    <button v-on:click="shuffleStocks(stocks)" class="shuffle-stocks">Shuffle Stocks!</button>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      stocks: []
    }
  },
  created() {
    this.stocks = this.$store.state.stocks;
  },
  methods: {
    shuffleStocks(stocks) {
      stocks.sort(() => Math.random() - 0.5);
    }
  }
}
</script>

<style scoped>
.shuffle-stocks {
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
.side-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stock {
  padding: 1em;
  background-color: white;
  width: 70%;
  font-size: 1.2em;
  margin: .5em;
}
.stock-company {
  margin-top: 0;
}
</style>