const object = {
  name: 'snow',
  age: 20,
  obj: {
    prop1: 1
  }
}
const hanlder = {
  get: function(obj, prop) {
    console.log('get ' + prop)
    return obj[prop]
  }
}
const proxy = new Proxy(object, hanlder)

proxy.obj.prop1
