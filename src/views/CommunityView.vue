<template>
  <div class='community-list'>
    <div class='community-list-top'>
      <div class='community-list-top-name'>
        <h1>Raspberry Pi Courses</h1>
      </div>
      <div class='community-list-description'>
        <p>실전 예제와 꿀팁으로 한층 세련된 나만의 라즈베리파이 작품을 만들어 보세요!</p>
      </div>
    </div>
    <div class='community-list-bottom'>
      <CommunityList></CommunityList>
    </div>
  </div>
</template>

<script>
import CommunityList from '../components/CommunityList';

export default {
  name: 'CommunityView',
  data(){
    return {
      
    }
  },
  components: {
    "CommunityList": CommunityList
  }
}
</script>

<style>
.community-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.community-list-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FF015E;
  color: #ffffff;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
}

.community-list-bottom {
  display: flex;
  justify-content: center;
}

.community-list-top-name > h1 {
  font-size: 4rem;
}

.community-list-description > p {
  font-size: x-large;
}

</style>