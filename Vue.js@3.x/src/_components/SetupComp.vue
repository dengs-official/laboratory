<script>

export default {
  name: 'SetupComp',
  props: {
    name: {
      type: String,
      default: 'Setup',
    },
  },
  setup(props, { attrs }) {
    return () => (
      <div class="setup-component">
        <div>
          <p>Name: {props.name}</p>
          <p>Age: {attrs.age}</p>
        </div>
      </div>
    );
  },
};
</script>

<style>

</style>
