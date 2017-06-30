<template>
	<div class="container-fluid confoot">
	    <div  style="width:100%;position: relative;">
		   <router-link v-bind:to="{path:'/'}" v-if="this.$route.query.Title !=null"><span>首 页</span></router-link>
		   <abbr  class="toptitle">我的简历</abbr>
		</div>
	</div>
</template>