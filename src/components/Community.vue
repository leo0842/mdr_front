<template>
  <div class="community-page">
    <div class="community-banner">
      <h1>Raspberry Pi Courses</h1>
    </div>
    <div class="community-box">
      <div class='community-box-title'>
        <h1>{{ title }}</h1>
      </div>
      <div class='community-box-info'>
        <div class='community-box-created'>
          {{ created }}
        </div>
      </div>
      <div class='community-box-content'>
        <div class='community-box-content-template'>
          {{ content }}
        </div>
      </div>
    </div>
    <div class="community-liked">
      <div class="community-liked-grid">
        <div class="liked-icon">
          <font-awesome-icon icon="thumbs-up" />
        </div>
        <div class="liked-number">
          {{ liked }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Community',
  data() {
    return {
      id: 0,
      title: 'Welcome to community 1',
      created: new Date().toLocaleString(),
      thumbnail: 'Thumbnail img',
      content: 'content is very very long',
      liked: 5
    }
  }
}
</script>

<style> 

.community-banner {
  display: flex;
  height: 224px;
  justify-content: center;
  align-items: center;
  background-color: #4137E4;
  color: #ffffff;
  margin-bottom: 40px;
}

.community-banner > h1 {
  font-size: 50px;
}

.community-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.community-box-title > h1 {
  font-size: 50px;
}

.community-box-info {
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  border-bottom: 1px solid #000000;
  margin-bottom: 15px;
}

.community-box-created {
  margin: 15px 30px;
}

.community-box-content {
  display: flex;
  width: 80%;
  justify-content: left;
}

.community-box-content-template {
  display: flex;
  margin: 0px 30px;
}

.community-liked {
  display: flex;
  justify-content: center;
}

.community-liked-grid {
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: space-between;
}

.liked-icon:hover {
  width: 25px;
  height: 25px;
  background-color: #FF015E;
  border-radius: 12px;
  vertical-align: middle;
}

</style>