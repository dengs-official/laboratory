import './Render.less';

/**
 * 渲染函数的变更
 * 1. class，style 变为$attrs一部分，默认不会添加到根元素中
 * 2. $listeners 移除，变为$attrs一部分
 * 3. $attrs只包含未被props和emits定义的属性和事件
 * 4. 移除$scopedSlots，都在$slots中
 *
 * 5.VNode的props更加扁平，没有attrs，props，on等，都在同一级
 * 6.插槽从props中移除，通过第三个参数以插槽对象的方式传入
 *
 * 7.jsx支持v-show，v-model，v-models, v-custom指令
 * 8.jsx插槽可以通过v-slots指令对象，或者节点内{{}}对象传入
 */
const Card = {
  inheritAttrs: false,
  name: 'Card',
  props: {
    header: {
      type: Object,
      default: () => ({
        title: 'Header',
      }),
    },
  },
  // emits: [
  //   'footerClick',
  // ],
  render() {
    const { header, $attrs, $slots } = this;
    console.log($attrs, $slots);
    const nodeProps = {
      class: ['card', $attrs.class],
    };
    return (
      <div {...nodeProps}>
        <div class="header">
          <h3>{header.title}</h3>
        </div>
        <div class="content">
          {$slots.default ? $slots.default() : 'Content'}
        </div>
        <div class="footer" onClick={(e) => { this.$emit('footerClick', e); }}>
          {$slots.footer?.()}
        </div>
      </div>
    );
  },
};

export default {
  name: 'Render',
  render() {
    const cardProps = {
      id: 'renderCard',
      header: {
        title: 'Render Header',
      },
      onFooterClick: (e) => { console.log(e); },
    };
    const cardSlots = {
      default: () => <p>Render Content</p>,
      footer: () => <h4>Render footer</h4>,
    };
    return (
      <Card class="render-card" {...cardProps} v-slots={cardSlots}>
        {{
          // default: () => <p>Render Content</p>,
          // footer: () => <h4>Render footer</h4>,
        }}
      </Card>
    );
  },
};
