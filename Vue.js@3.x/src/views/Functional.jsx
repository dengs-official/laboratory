// 函数创建组件和setup返回render有本质区别
import {
  ref, toRefs, computed, watch,
} from 'vue';

// gent list
const ListCompF = (props, { attrs, slots, emit }) => {
  console.log(props);
  const { size, props: objProps } = toRefs(props);
  const counter = ref(0);
  const generatedList = computed(
    (ctx) => Array.from({ length: size.value }, (v, k) => ({
      key: k,
      name: `List${k}`,
      dynamic: `${objProps.value}${k}`,
    })),
  );
  watch(() => props.size, (to) => {
    console.log(to);
  });

  return (
    <ul>
      {generatedList.value.map((item) => (
        <li key={item.key}>{item.name} -- {item.dynamic}</li>
      ))}
    </ul>
  );
};
ListCompF.props = {
  size: {
    type: [Number, String],
  },
  props: {
    type: String,
  },
};

const MainCompF = () => {
  const size = ref(10);
  const props = ref('');
  const onGenerate = () => {
    console.log(size, props);
  };

  return (
    <div>
      <label for="size">Size: </label>
      <input name="size" v-model={size.value}></input>
      <label for="props">Props: </label>
      <a-input name="props" v-model={[props.value, 'value']}></a-input>
      <a-button onClick={onGenerate}>Generate</a-button>
      <br />
      <ListComp size={size.value} props={props.value} />
    </div>
  );
};
MainCompF.displayName = 'Functional';

const ListComp = {
  props: {
    size: {
      type: [Number, String],
    },
    props: {
      type: String,
    },
  },
  setup(props, { attrs, slots, emit }) {
    console.log(props);
    const { size, props: objProps } = toRefs(props);
    const counter = ref(0);
    const generatedList = computed(
      (ctx) => Array.from({ length: size.value }, (v, k) => ({
        key: k,
        name: `List${k}`,
        dynamic: `${objProps.value}${k}`,
      })),
    );
    watch(() => props.size, (to) => {
      console.log(to);
    });

    return () => (
      <ul>
        {generatedList.value.map((item) => (
          <li key={item.key}>{item.name} -- {item.dynamic}</li>
        ))}
      </ul>
    );
  },
};

const MainComp = {
  name: 'Functional',
  data() {
    return {
      size: 0,
      props: '',
    };
  },
  methods: {
    onGenerate() {

    },
  },
  render() {
    return (
      <div>
      <label for="size">Size: </label>
      <input name="size" v-model={this.size}></input>
      <label for="props">Props: </label>
      <a-input name="props" v-model={[this.props, 'value']}></a-input>
      <a-button onClick={this.onGenerate}>Generate</a-button>
      <br />
      <ListComp size={this.size} props={this.props} />
    </div>
    );
  },
};

const MainComp1 = {
  name: 'Functional',
  setup() {
    const size = ref(10);
    const props = ref('');
    const onGenerate = () => {
      console.log(size, props);
    };

    return () => (
      <div>
        <label for="size">Size: </label>
        <input name="size" v-model={size.value}></input>
        <label for="props">Props: </label>
        <a-input name="props" v-model={[props.value, 'value']}></a-input>
        <a-button onClick={onGenerate}>Generate</a-button>
        <br />
        <ListCompF size={size.value} props={props.value} />
      </div>
    );
  },
};

export default MainComp1;
