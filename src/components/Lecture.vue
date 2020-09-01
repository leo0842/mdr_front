<template>
  <div>
    <h1>Lecture</h1>
  <p>
    <ul>
      <li>Lecture1: {{lecture1}}</li>
      <li>Lecture2: {{lecture2}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Lecture',
  data(){
    return {
      Lecture1: "Lecture1 내용 or 썸네일",
      Lecture2: "Lecture2 내용 or 썸네일",
    }
  }
}
</script>