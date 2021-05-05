import {
  Button,
  Input,
  Layout,
  List,
  Menu,
  Select,
} from 'ant-design-vue';

const comments = [
  Button,
  Input,
  Layout,
  List,
  Menu,
  Select,
];

export default function use(app) {
  comments.forEach((item) => {
    app.use(item);
  });
}
