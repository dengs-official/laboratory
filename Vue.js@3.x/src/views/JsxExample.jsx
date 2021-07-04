import Button from '@/components/Button';
import Card from '@/components/Card';

export default {
  name: 'jsx-example',
  setup() {
    const style = { color: 'red' };
    const className = ['jsx-exa-button', { test: false }];
    return () => (
      <>
      <Button class={className} style={style}>测试按钮</Button>
      <Card style>
        {{
          cover: () => <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>,
          // footer: () => <h3>Footer</h3>,
        }}
      </Card>
      </>
    );
  },
};
