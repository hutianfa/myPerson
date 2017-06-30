<template >
  <nav class="tab-content">
   <div class="conview" v-for="per in newslist">
    <div class="hex">
      <router-link  v-bind:to="{path:per.newpath,query:{Title:per.Ename}}" >
        <div class="corner-1"></div>
        <div class="corner-2"></div> 
        <div class="nav-text">{{per.Ename}}</div>
        <div class="nav-text ntext">{{per.name}}</div>
      </router-link>
    </div>
  </div>  
    <div class="cont">
      <h4 class="user-phone">Web前端工程师</h4>
      <p class="user-age">一腔热血的激情 · 一夜失眠的创意 · 一个像素的执着</p>
      <p class="user-address"><a href="mailto:me@hu.tianfa.com">me@hu.tifan@qq.com</a></p>
      <p class="user-address"><a href="tel:18280076437">18280076437</a></p>
    </div>
  </nav>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
       newslist:[
         {Ename:"INTRODUCE",name:"个人简介",newpath:'/person'},
         {Ename:"VOC SKILL",name:"职业技能",newpath:'/vocskill'},
         {Ename:"EXPRIENCE",name:"工作经历",newpath:'/exprience'},
         {Ename:"CONNECTION",name:"联系我们",newpath:'/other'}
       ]
      }
    }
  }
</script>


