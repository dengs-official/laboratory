<template>
  <div class="emit-comp">
    <form @submit="onSubmit" class="form">
      <section>
        <label for="username">Name: </label>
        <input name="username" v-model="form.username" />
      </section>
      <section>
        <label for="gender">Gendar: </label>
        <input type="radio" name="gender" v-model="form.gendar" value="male" />
        <input type="radio" name="gender" v-model="form.gendar" value="female" />
      </section>
      <section>
        <label for="section">Section: </label>
        <select name="section" v-model="form.section">
          <option value="math">Math</option>
          <option value="history">History</option>
          <option value="english">English</option>
        </select>
      </section>
      <section>
        <label for="skills">Skills: </label>
        <!-- <label for="java">Java</label> -->
        <input type="checkbox" name="skills" v-model="form.skills" value="java" />
        <!-- <label for="javascript">JavaScript</label> -->
        <input type="checkbox" name="skills" v-model="form.skills" value="javascript" />
      </section>
      <section>
        <input class="form-submit" type="submit" />
      </section>
    </form>
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  name: 'EmitComp',
  emits: {
    submit: (payload) => {
      if (payload.username && payload.gendar) {
        return true;
      }
      console.warn('Invalid submit event payload');
      return false;
    },
  },
  data() {
    return {
      form: {
        skills: [],
      },
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$emit('submit', this.form);
    },
  },
};
</script>

<style lang="less">
.form {
  width: fit-content;
  position: relative;
  background: #fff;
  padding: 10px 0;
  section {
    position: relative;
    margin-bottom: 20px;
    :last-child {
      width: 200px;
    }
    &:last-child {
      margin-bottom: 0;
      display: flex;
      flex-direction: row-reverse;
    }
  }
  label {
    display: inline-block;
    width: 100px;
    text-align: right;
    margin-right: 10px;
  }
  &-submit {
    width: 50px !important;
    margin-right: 10px;
  }
}
</style>
