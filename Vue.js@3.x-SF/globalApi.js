const Child = {
  template: `<div class="child">This is child component</div>`
}

const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue'
    }
  },
  created() {
  },
  template: `
  <div id="app">
  <h3>{{message}}</h3>
  <Child />
  </div>
  `
})

app.component('Child', Child)

app.config.globalProperties.foo = 'foo'

const instance = app.mount('#app')

const app2 = Vue.createApp({
  template: `
  <div id="app2">
  <h4>This is app2</h4>
  </div>
  `
})

const instance2 = app2.mount('#app2')

console.log(instance)
console.log(instance2)