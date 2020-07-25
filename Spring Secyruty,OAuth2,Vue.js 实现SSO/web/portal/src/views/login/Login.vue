<template>
  <div class="login-wrapper">
    <div class="login-form">
      <a-input type="text" v-model="username" placeholder="请输入用户名"></a-input>
      <a-input type="password" v-model="password" placeholder="请输入密码"></a-input>
      <a-button type="primary" @click="onLogin">登录</a-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch('login', {username: this.username, password: this.password});
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  &-wrapper {
    position: relative;
    height: 100%;
  }
  &-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > * {
      margin-bottom: 10px;
    }
    .ant-btn {
      width: 100%;
    }
  }
}
</style>
