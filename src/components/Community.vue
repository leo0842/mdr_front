<template>
  <div>
    <h1>Community</h1>
  <p>
    <ul>
      <li>Community1: {{Community1}}</li>
      <li>Community2: {{Community2}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Community',
  data(){
    return {
      Community1: "Community1 내용 or 썸네일",
      Community2: "Community2 내용 or 썸네일",
    }
  }
}
</script>