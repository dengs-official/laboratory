const {createApp} = Vue;

// v-model v-model:email v-model:phone
const MyForm = {
  name: 'MyForm',
  props: {
    modelValue: undefined,
    email: undefined,
    phone: undefined
  },
  data() {
    return {
      
    }
  },
  template: `
  <form>
  <label name="name">Name: </label>
  <input :value="modelValue" @input="(e) => $emit('update:modelValue', e.target.value)" />
  <label name="email">Email: </label>
  <input :value="email" @input="(e) => $emit('update:email', e.target.value)" />
  <label name="phone">Phone: </label>
  <input :value="phone" @input="(e) => $emit('update:phone', e.target.value)" />
  </form>
  `
}

const app = createApp({
  data() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  },
  computed: {
    formInfo() {
      const {name, email, phone} = this;
      return `${name} ${email} ${phone}`
    }
  },
  template: `
  <div id="app">
  <MyForm v-model="name" v-model:email="email" v-model:phone="phone" />
  <p style="width: 100vw; min-height: 20px; border: 1px solid #ccc;">{{formInfo}}</p>
  </div>
  `
})

app.component(MyForm.name, MyForm)

const instance = app.mount('#app')
console.log(instance)