<template>
  <div>
    <h2>Navigation Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: '아이콘 넣기',
          page:'/'
        },
        {
          id: 1,
          text: '강의들',
          page:'/lecture'
        },
        {
          id: 2,
          text: '커뮤니티',
          page:'/community'
        },
        {
          id: 3,
          text: '자주 묻는 질문',
          page:'/question'
        },
        {
          id: 4,
          text: '로그인',
          page:'/login'
        },
        {
          id: 5,
          text: '회원가입',
          page:'/signup'
        }
      ]
    }
  }
}
</script>

<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
</style>