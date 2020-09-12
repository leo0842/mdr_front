<template>
  <div>
    <nav>
      <div class='navigation-block'>
        <div class="navigation-block-left">
          <router-link class="navigation-block-left-button" v-for="routes in leftlinks" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">{{routes.text}}</router-link>
        </div>
        <div class="navigation-block-right">
          <router-link class="navigation-block-right-button" v-for="routes in rightlinks" 
          v-bind:key="routes.id"
          :to="`${routes.page}`">{{routes.text}}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      leftlinks: [
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
        }
      ],
    rightlinks: [
        {
          id: 0,
          text: '로그인',
          page:'/login'
        },
        {
          id: 1,
          text: '회원가입',
          page:'/signup'
        }
      ]
    }
  }
}
</script>

<style> 
  .navigation-block { 
    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    box-sizing: border-box;
  }

  .navigation-block-left, .navigation-block-right {
    display: flex;
    justify-content: space-between;
  }

  .navigation-block-left {
    width: 30%;
  }

  .navigation-block-right {
    width: 15%;
  }

  .navigation-block-left-button {
    display: flex;
    width: 120px;
    height: 45px;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .navigation-block-right-button {
    display: flex;
    width: 95px;
    height: 45px;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px solid #000000;
    border-radius: 8px;
  }

  .navigation-block-right-button:nth-child(2) {
    color: #ffffff;
    background-color: blueviolet;
  }

</style>