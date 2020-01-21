<template>
  <div class="header">
    <div class="header__left">
      <img src="https://www.gkigunsa.or.id/images/logo.png" alt="logo" class="logo">
      <div class="item">Article</div>
      <div class="item">Banner</div>
      <div class="item">Jadwal</div>
      <div class="item">More</div>
    </div>
    <div class="header__right">
      <div
        class="item"
        @click="toggleVisibleLoginPopUp"
      >Login</div>
    </div>
    <Login v-if="visibleLoginPopUp" />
  </div>
</template>

<script src="./js/header.js"></script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    margin: 8px;
    &__left {
      display: flex;
      align-items: center;
    }
    &__right {
      display: flex;
      align-items: center;
    }
    .item {
      font-size: 2.2rem;
      padding: 1rem 1.6rem;
      cursor: pointer;
      &:hover {
        color: var(--primary-color-red);
      }
    }
  }
</style>
