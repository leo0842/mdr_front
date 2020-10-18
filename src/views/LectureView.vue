<template>
  <div class='lecture-list'>
    <div class='lecture-list-top'>
      <div class='lecture-list-top-name'>
        <h1>Raspberry Pi Courses</h1>
      </div>
      <div class='lecture-list-description'>
        <p>실전 예제와 꿀팁으로 한층 세련된 나만의 라즈베리파이 작품을 만들어 보세요!</p>
      </div>
    </div>
    <div class='lecture-list-bottom'>
      <LectureList></LectureList>
    </div>
  </div>
</template>

<script>
import LectureList from '../components/LectureList';

export default {
  name: 'LectureView',
  data(){
    return {
      
    }
  },
  components: {
    "LectureList": LectureList
  }
}
</script>

<style>
.lecture-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.lecture-list-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #4137E4;
  color: #ffffff;
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
}

.lecture-list-bottom {
  display: flex;
  justify-content: center;
}

.lecture-list-top-name > h1 {
  font-size: 4rem;
}

.lecture-list-description > p {
  font-size: x-large;
}

</style>