// data里面reactive处理

const app = Vue.createApp({
  data() {
    return {
      user: {
        name: 'snow',
        scores: [{
          project: 'english',
          score: 70
        }, {
          project: 'math',
          score: 99
        }],
        others: {
          height: 167,
          sex: 'man'
        }
      }
    }
  },
  methods: {
    onNameClick() {
      this.user.name = 'Snow'
      console.log(this.user)
      console.log(this.user.scores)
    }
  },
  template: `
  <div>
    <div @click="onNameClick"><h1>{{user.name}}</h1></div>
    <div><ul><li v-for="item in user.scores" :key="item.project"><h5>{{item.project}}</h5></li></ul></div>
  </div>
  `
})
app.config.devtools = true

const instance = app.mount('#app');

console.log(instance)