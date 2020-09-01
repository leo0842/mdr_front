<template>
  <div>
    <h2>Navigation Bar</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'About',
          page:'/About'
        },
        {
          id: 2,
          text: 'Lecture',
          page:'/Lecture'
        },
        {
          id: 3,
          text: 'Community',
          page:'/Community'
        }
      ]
    }
  }
}
</script>

<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
</style>