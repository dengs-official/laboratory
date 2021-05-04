import {
  Button,
  Layout,
  Menu,
} from 'ant-design-vue';

const comments = [
  Button,
  Layout,
  Menu,
];

export default function use(app) {
  comments.forEach((item) => {
    app.use(item);
  });
}
