<template>
  <div>
    <h1>로그인</h1>
    <div class='form-login'>
      <label for="email">이메일</label>
      <input type="text" id="email" class="form-control" v-model="user.email">
      <label for="password">비밀번호</label>
      <input type="password" id="password" class="form-control" v-model.lazy="user.password">
      <button class="btn btn-primary" @click.prevent="submitted">로그인</button>
    </div>
    <router-link to="/findpassword" class="find-password">비밀번호 찾기</router-link>
  </div>
</template>

<script>
export default {
  name: 'Login', //this is the name of the component
  data(){
    return {
      user: {
        email:"",
        password:""
      },
      isSubmitted: false
    }
  },
  methods: {
    submitted(){
      this.isSubmitted = true;
      this.$router.push({name: 'Home'})
    }
  }
}

</script>
<style>
  .form-login {
    display:-ms-grid;
  }
</style>