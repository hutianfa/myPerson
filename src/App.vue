<template>
  <div id="wrapper">
    <myfoot></myfoot>
    <myhead ></myhead>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/javascript">
  import myhead from 'myHead.vue'
  import myfoot from 'myFoot.vue'
  export default{
     components:{myhead,myfoot}
  }
</script>
