<template>
  <div>
    <div class="banner">
      <div class="banner-text">
        <p>Let's</p>
        <p>Raspberry Pi</p>
        <span>코딩은 만들어 보는거야!</span>
      </div>
    </div>
    <div class="lecture">
      <div class="title">
          <h1>Lecture</h1>
        </div>
        <div class="description">
          <p>강의들과 함께 라즈베리 파이에 대한 기초지식을 배워보세요.</p>
        </div>
      <div class="lecture-list">
        <LectureList></LectureList>
      </div>
      <router-link v-bind:to="`lecture`">
        <div class='link'>
          <p>더 알아보기 →</p>
        </div>
      </router-link>
    </div>
    <div class="community">
      <div class="title">
        <h1>Community</h1>
      </div>
      <div class="description">
        <p>모르면 묻고 해답을 찾아가며 다른 사람들과 소통해보세요.</p>
        <p>커뮤니티를 이용하다보면 어느새 실력이 UP!</p>
      </div>
      <div class="community-list">
        <CommunityList></CommunityList>
      </div>
      <router-link v-bind:to="`community`">
        <div class='link'>
          <p>더 알아보기 →</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import LectureList from '../components/LectureList';
import CommunityList from '../components/CommunityList';

export default {
  name: 'Home',
  components: {
    'LectureList': LectureList,
    'CommunityList': CommunityList
  }
}
</script>

<style>
.banner {
  display: flex;
  box-sizing: border-box;
  padding: 0px 150px;
  width: 100%;
  height: 300px;
  align-items: center;
  background-color: #c3af23;
}

.banner-text {
  text-align: left;
}

.banner-text > p {
  color: #4137E4;
  font-family: fantasy;
  font-size: 60px;
  font-weight: bolder;
  margin: 10px 0px;
}

.banner-text > span {
  font-size: 25px;
}

.lecture-list {
  display: flex;
  justify-content: center;
}

.community-list {
  display: flex;
  justify-content: center;
}

.link > p {
  font-size: x-large;
  font-weight: bold;
  color: #4137E4;
  margin: 10px 0px;
}
</style>