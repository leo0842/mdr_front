<template>
  <div class="lecture-list-container">
    <div v-for="lecture in lectures" :key="lecture.id" class="lecture-list-box">
      <router-link v-bind:to="`lecture/${lecture.id}`">
        <div class="lecture-list-box-image">
          {{ lecture.thumnail }}
        </div>
        <div class="lecture-list-box-text">
          <div class="lecture-list-box-text-title">
            {{ lecture.title }}
          </div>
          <div class="lecture-list-box-text-description">
            {{ lecture.description }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LectureList',
  data() {
    return {
      lectures: [{"id": 0, "title" : "lecture 1", "thumnail" : "Thumnail img", "description" : "강의에 관한 설명"}, {"id": 1, "title" : "lecture 2", "thumnail" : "Thumnail img", "description" : "강의2에 관한 설명"}, {"id": 2, "title" : "lecture 3", "thumnail" : "Thumnail img", "description" : "강의3에 관한 설명"}, {"title" : "lecture 4", "thumnail" : "Thumnail img", "description" : "강의4에 관한 설명"}]
    }
  }
}
</script>

<style>
.lecture-list-container {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
}

.lecture-list-box {
  display: block;
  min-width: 300px;
  max-width: 300px;
  height: 420px;
  margin: 20px;
  border: 1px solid #000000;
  border-radius: 16px;
}

.lecture-list-box-image {
  height: 280px;
}

.lecture-list-box-text {
  height: 140px;
}

.lecture-list-box-text-title {
  height: 80px;
  width: 100%;
  margin: 0px 15px;
  text-align: left;
  font-size: x-large;
  font-weight: 700;
}

.lecture-list-box-text-description {
  height: 60px;
  text-align: left;
  margin: 0px 15px;
  font-size: large;
  font-weight: 500;
}
</style>