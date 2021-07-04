// slots使用
export default {
  name: 'v-card',
  props: {},
  emits: {},
  setup(props, { attrs, slots, emit }) {
    const _slots = {
      default: () => <p>Default Content</p>,
      ...slots,
    };
    console.log(_slots);
    return () => (
      <div class="v-card" style="width: 200px;">
        <a-card class="v-card-main">
          {/* <p>Default Content</p> */}
          {_slots /** 传递 slots => <template #default></template> */}
        </a-card>
        <div class="v-card-footer">
          {_slots?.footer?.() /** 定义slot => <slot name="footer" /> */}
        </div>
      </div>
    );
  },
};
