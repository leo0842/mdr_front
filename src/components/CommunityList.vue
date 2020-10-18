<template>
  <div class="community-list-container">
    <div v-for="community in communities" :key="community.id" class="community-list-box">
      <router-link v-bind:to="`community/${community.id}`">
        <div class='community-router'>
          <div class="community-list-box-left">
            <div class="community-list-box-title">
              {{ community.title }}
            </div>
            <div class="community-list-box-info">
              <div class="community-list-box-info-creator">
                {{ community.creator }}
              </div>
              <div class="community-list-box-info-created">
                {{ new Date() - community.created }}
              </div>
            </div>
          </div>
          <div class="community-list-box-right">
            <div class="community-list-box-right-liked">
              <font-awesome-icon icon="thumbs-up" />
              {{ community.liked }}
            </div>
            <div class="community-list-box-right-number-of-comments">
              댓글 {{ community.numberOfComments }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityList',
  data() {
    return {
      communities: [{"id": 0, "creator": "utek", "created": new Date("2020-10-19"), "title" : "community 1", "liked": 5, "numberOfComments": 7}, {"id": 1, "creator": "sungsan", "created": new Date("2020-10-18"),"title" : "community 2", "liked": 2, "numberOfComments": 1}, {"id": 2, "creator": "sungsan", "created": new Date("2020-10-17"), "title" : "community 3", "liked": 4, "numberOfComments": 3}]
    }
  }
}
</script>

<style>
.community-list-container {
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
}

.community-list-box {
  display: block;
  width: 1200px;
  height: 135px;
  border: 1px solid #000000;
}

.community-router {
  display: flex;
  justify-content: space-between;
}

.community-list-box-left {
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
 margin-left: 20px;
 width: 400px;
}

.community-list-box-title {
  font-size: 35px;
  text-align: left;
  width: 70%;
}

.community-list-box-info {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}

.community-list-box-info-creator {
  font-size: 20px;
  font-weight: 600;
  width: 100px;
}

community-list-box-info-created {
  font-weight: 200;
}

.community-list-box-right {
  display: flex;
  position: relative;
  align-items: center;
  width: 120px;
  height: 135px;
  margin-right: 10px;
}

.community-list-box-right-liked {
  position: absolute;
  left: 10px;
}

.community-list-box-right-number-of-comments {
  position: absolute;
  left: 65px;
}


</style>