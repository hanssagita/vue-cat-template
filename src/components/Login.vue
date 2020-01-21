<template>
  <Modal v-slot:content>
    <div class="login">
      <div class="login__title">Welcome to GKI Gunsa Center</div>
      <div class="login__inputs">
        <input class="field" type="text" placeholder="Username" v-model="username">
        <input class="field" type="text" placeholder="Password" v-model="password">
        <button class="submit" @click="doLogin">Login</button>
      </div>
    </div>
  </Modal>
</template>

<script src="./js/Login.js"></script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
    &__title {
      font-size: 2.4rem;
    }
    &__inputs {
      padding: 0;
      display: flex;
      flex-direction: column;
      margin: 1rem;
      .field {
        padding: 1rem 2rem;
        font-size: 1.6rem;
        border: 1px solid #e7ecee;
        &:first-child {
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
        &:last-child {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
      .submit {
        margin-top: 1.2rem;
        padding: .8rem 2rem;
        font-size: 1.6rem;
      }
    }
  }
</style>
