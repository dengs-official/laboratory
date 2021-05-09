<template>
  <a-button @click="modal.open = true">打开</a-button>
  <teleport to="body">
    <div v-if="modal.open" class="modal-wrap">
      <div class="modal-mask"></div>
      <div class="modal">
        <div class="modal-title"><h4>Modal</h4></div>
        <div class="modal-content">I'am a teleported modal!</div>
        <div class="modal-footer">
          <a-button @click="modal.open = false">OK</a-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'TeleportExp',
  data() {
    return {
      modal: {
        open: true,
      },
    };
  },
};
</script>

<style lang="less">
.modal-mask {
  position: fixed;
  background-color: lightgray;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .6;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  &-title {
    border-bottom: 1px solid #ccc;
    padding: 10px 20px;
  }
  &-content {
    padding: 10px 20px;
  }
  &-footer {
    border-top: 1px solid #ccc;
    padding: 10px 20px;
  }
}
</style>
