import Vue from 'vue'
import App from './App.vue'

export const textBus = new Vue({
  data: function() {
    return {
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
