// setup 中props，attrs，slots，emit区别
// this.$attrs 和 attrs区别

const Child = {
  name: 'Child',
  props: {
    name: {
      type: String,
    }
  },
  setup(props, {attrs, slots, emit}) {
    Vue.onUpdated(() => {
      console.log({$attrs: instance.$attrs, attrs})
    })
    
    return {
    }
    
  },
  data() {
    return {

    }
  },
  computed: {
    dAge() {
      console.log(this.$attrs)
      return this.$attrs.age * 2;
    }
  },
  watch: {
    '$attrs.age': {
      handler(to) {
        console.log(to)
      }
    }
  },
  template: `
    <div>{{name}}--{{$attrs.age}}--{{dAge}}</div>
  `
}
const app = Vue.createApp({
  components: {
    Child
  },
  data() {
    return {
      name: 'Snow',
      age: 0
    }
  },
  updated() {
    console.log(instance)
    console.log(this)
    console.log(instance === this)

  },
  methods: {
    onClick() {
      // this.name = "Testet"
      this.age++
    }
  },
  template: `
    <div>
      <button @click="onClick">Click</button>
      <Child :name="name" :age="age" />
    </div>
  `
})

const instance = app.mount('#app')

console.log({app, instance})