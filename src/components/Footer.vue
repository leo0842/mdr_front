<template>
  <div class="footer">
    <div class="copyright-footer">
        © 2020 MDR. All rights reserved
    </div>
    <div class="sns-footer">
        <font-awesome :icon="['fab', 'youtube']"/>
        youtube
    </div>
  </div>
</template>

<script>
export default {
  title: 'Footer',
  data() {
    return {
      
    }
  }
}
</script>

<style> 
.footer {
    box-sizing: border-box;
    margin-top: 30px;
    width: 100%;
    display: flex;
    padding: 30px;
    height: 120px;
    justify-content: space-between;
    background-color: #ffffff;
    border-top: 1px solid #000000;
}


</style>