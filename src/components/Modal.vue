<template>
  <div class="modal">
    <div class="mask"></div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script src="./js/modal.js"></script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  .mask {
    background-color: rgba(0,0,0,.6);
    z-index: 8;
    width: 100vw;
    height: 100vh;
  }
  .content {
    width: 50%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: white;
  }
}
</style>
