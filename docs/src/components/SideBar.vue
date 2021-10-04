<template>
  <div class="side-bar">
    <div v-for="stock in stocks.slice(0,3)" :key="stock.instrument_id" class="stock">
      <p class="stock-company">{{stock.company_name}}</p>
      <p>TICK: {{stock.symbol}}</p>
      <a :href="stock.links.content" class="more-info">More Info</a>
    </div>
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
.more-info {
  color: #265E75;
}
.shuffle-stocks {
  font-size: 1.3em;
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  color: #76323F;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: .5em;
  margin-top: .5em;
}
.side-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.stock {
  padding: 1em;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  width: 70%;
  font-size: 1.2em;
  margin: .5em;
}
.stock >>> p {
  margin: .5em 0;
}
.stock-company {
  margin-top: 0;
}
</style>