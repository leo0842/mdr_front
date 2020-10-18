<template>
  <div class="lecture-page">
    <div class="lecture-banner">
      <h1>Raspberry Pi Courses</h1>
    </div>
    <div class="lecture-box">
      <div class='lecture-box-title'>
        <h1>{{ title }}</h1>
      </div>
      <div class='lecture-box-info'>
        <div class='lecture-box-created'>
          {{ created }}
        </div>
      </div>
      <div class='lecture-box-content'>
        <div class='lecture-box-content-template'>
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Lecture',
  data() {
    return {
      id: 0,
      title: 'Welcome to lecture 1',
      created: new Date().toLocaleString(),
      thumbnail: 'Thumbnail img',
      content: 'content is very very long'
    }
  }
}
</script>

<style> 

.lecture-banner {
  display: flex;
  height: 224px;
  justify-content: center;
  align-items: center;
  background-color: #4137E4;
  color: #ffffff;
  margin-bottom: 40px;
}

.lecture-banner > h1 {
  font-size: 50px;
}

.lecture-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lecture-box-title > h1 {
  font-size: 50px;
}

.lecture-box-info {
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  border-bottom: 1px solid #000000;
  margin-bottom: 15px;
}

.lecture-box-created {
  margin: 15px 30px;
}

.lecture-box-content {
  display: flex;
  width: 80%;
  justify-content: left;
}

.lecture-box-content-template {
  display: flex;
  margin: 0px 30px;
}

</style>