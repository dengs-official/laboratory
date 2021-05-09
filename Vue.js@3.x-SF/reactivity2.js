// 响应性API
const state = Vue.reactive({
  count: 0
})
const {count: stateCount} = Vue.toRefs(state)

const count = Vue.ref(0)

const states = Vue.reactive({
  name: 'snow',
  arry: [1,2],
  obj: {
    first: 'snow',
    last: 'deng'
  }
})

const states1 = Vue.shallowReactive({
  name: 'snow',
  arry: [1,2],
  obj: {
    first: 'snow',
    last: 'deng'
  }
})

const {obj} = Vue.toRefs(states)
const arry = states.arry
// const arry = [1,2]

console.log(obj)

const app = Vue.createApp({
  data() {
    return {
    }
  },
  mounted() {
  },
  // template: `
  // <div>{{state}}</div>
  // `
  render() {
    return Vue.h(
      'button',
      {onClick: () => {
        stateCount.value++,
        count.value+=2
        obj.value.last += 't'
        arry.push(3)
      }},
      `
      state count is ${stateCount.value},
      count is ${count.value},
      states obj is ${obj.value.last} ${obj.value.first}
      states arry is ${arry}
      `
      )
  },
})

const instance = app.mount('#app')

console.log({instance, state, count, states, states1})

console.log(states.arry)
console.log(states1.arry)