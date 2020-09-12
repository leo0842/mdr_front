<template>
  <div class=login-box>
    <h1>로그인</h1>
    <div class='login-box-center'>
        <div class='login-box-center-form'>
          <input type="text" id="email" class="form-control" placeholder="이메일" v-model="user.email">
          <input type="password" id="password" class="form-control" placeholder="비밀번호" v-model.lazy="user.password">
          <button class="btn btn-primary form-control btn-login" @click.prevent="submitted">로그인</button>
          <router-link to="/findpassword" class="find-password">비밀번호 찾기</router-link>
        </div>
        <v-divider></v-divider>
        <div class='login-box-center-oAuth'>
          <button class="btn btn-primary form-control btn-kakao" @click.prevent="submitted">카카오 로그인</button>
          <button class="btn btn-primary form-control btn-naver" @click.prevent="submitted">네이버 로그인</button>
          <button class="btn btn-primary form-control btn-google" @click.prevent="submitted">구글 로그인</button>
        </div>
    </div>
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
  .login-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .login-box-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 75%;
    border: 1px solid #000000;
    border-radius: 16px;
  }

  .login-box-center-form, .login-box-center-oAuth {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    height: 50%;
  }

  .form-control {
    display: block;
    margin: 10px;
    height: 17%;
    border: 1px solid #000000;
    border-radius: 12px;
  }

  .btn-login {
    color: #ffffff;
    background-color: #4137E4;
    border: none;
  }

  .btn-kakao {
    color: #000000;
    background-color: #FEE500;
    border: none;
  }

  .btn-naver {
    color: #ffffff;
    background-color: #2EB402;
    border: none;
  }

  .btn-google {
    color: #292929;
    background-color: #ffffff;
  }

</style>