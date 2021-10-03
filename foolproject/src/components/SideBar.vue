<template>
  <div class="side-bar">
    <ul v-for="stock in stocks.slice(0,3)" :key="stock.instrument_id" class="stock">
      <p>{{stock.company_name}}</p>
      <p>TICK: {{stock.symbol}}</p>
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
  background-color: white;
  padding: 10px;
}
.side-bar {
  width: 30%;
}
.stock {
  padding: 1em;
  border: solid 2px black;
}
</style>