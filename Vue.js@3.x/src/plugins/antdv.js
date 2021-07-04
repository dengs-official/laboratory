import {
  Button,
  Input,
  Layout,
  List,
  Menu,
  Select,
  Card,
} from 'ant-design-vue';

const comments = [
  Button,
  Input,
  Layout,
  List,
  Menu,
  Select,
  Card,
];

export default function use(app) {
  comments.forEach((item) => {
    app.use(item);
  });
}
