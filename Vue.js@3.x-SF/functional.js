const {createApp, h} = Vue;

const DynamicHeading = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}

DynamicHeading.props = ['level']

const app = createApp({
  data() {
    return {
      level: 1
    }
  },
  template: `
  <div id="app">
    <input v-model="level" type="number" />
    <DynamicHeading :level="level">当前标头是{{level}}级</DynamicHeading>
  </div>
  `
})

app.component('DynamicHeading', DynamicHeading)

const instance = app.mount('#app')

console.log(instance)
