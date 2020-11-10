<template>
    <div>
        <p>
            WAIT
        </p>
    </div>
</template>

<script>
export default {
  name: 'LoginCallbackKakao',
  mounted () {
    const requestOptions4 = {
      code: this.$route.query.code
    };
    
    this.$axios
          .post("http://127.0.0.1:8000/user/signin/kakao/call_back/", requestOptions4)
          .then((res) => JSON.stringify(res.data))
          .then((data) => this.$store.commit("LOGIN", data))
          .then(this.$router.push("/home"))
  }
}
</script>