<template>
  <div>
    <h1>회원가입</h1>
    <div class='form-login'>
      <label for="email">이름 / 유저명</label>
      <input type="text" id="nickname" class="form-control" v-model="user.nickname"><br>
      <label for="email">이메일</label>
      <input type="text" id="email" class="form-control" v-model="user.email"><br>
      <label for="password">비밀번호</label>
      <input type="password" id="password" class="form-control" v-model.lazy="user.password"><br>
      <label for="password-check">비밀번호 확인</label>
      <input type="password" id="password-check" class="form-control" v-model.lazy="user.passwordCheck"><br>
      <button class="btn btn-primary" v-on:click="submitted">회원가입</button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'SignUp',
  data(){
    return {
      user: {
        nickname:"",
        email:"",
        password:""
      },
      data: ''
    }
  },
  methods: {
    submitted() {
  // POST request using fetch with set headers
  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.user)
  };
  console.log(this.user);
  fetch('http://localhost:8000/user/signup/', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
}
  }
}
</script>
<style>
  
</style>