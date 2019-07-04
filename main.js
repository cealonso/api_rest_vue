new Vue({
  el: '#app',
  data: {
    dataOrders: []
  },
  methods: {
    getOrders: function () {
     axios.get('https://my-json-server.typicode.com/cealonso/axios/orders')
      .then(response => {
        this.dataOrders = response.data
      })
      .catch((error) => {
        console.error(error)
      });
    }
  }
})