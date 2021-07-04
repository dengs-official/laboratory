export default {
  // inhertAttrs使用, https://v3.cn.vuejs.org/guide/migration/attrs-includes-class-style.html#%E6%A6%82%E8%A7%88
  inheritAttrs: false,
  name: 'v-button',
  props: {
    class: [String, Object, Array],
    style: [String, Object, Array],
  },
  emits: {},
  setup(props, { attrs, slots, emit }) {
    console.log({ attrs, slots, props });
    return () => (
      <div class={['v-button', props.class]} style={props.style}>
        <a-button>{slots}</a-button>
      </div>
    );
  },
};
