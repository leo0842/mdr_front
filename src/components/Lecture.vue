<template>
  <ul id="lecture">
    {{ title }}
    {{ thumbnail }}
    {{ content }}
  </ul>
</template>

<script>
export default {
  title: 'Lecture',
  data() {
    return {
      id: 0,
      title: 'Welcome to lecture 1',
      thumbnail: 'Thumbnail img',
      content: 'content is very very long'
    }
  }
}
</script>

<style> 
  
</style>