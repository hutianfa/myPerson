<template>
  <div class="container-fluid">
	<div class="tab-content voctabcon" v-for="voc in newpre">
	    <h3 class="progressbar-title">{{voc.preTitle}}</h3>
        <div class="progress">
            <div class="progress-bar" v-bind:style="voc.pclass">
                <span>{{voc.prce}}</span>
            </div>
        </div>
	</div>
 </div>
</template>
<script type="text/javascript">
  import Vue from 'Vue'
	export default{
		data(){
			return{
             newpre:[
             		{preTitle:"HTML5",prce:"55%",pclass:{width: '55%',background:'#005394'}},
             		{preTitle:"CSS3",prce:"45%",pclass:{width: '45%', background:'#d9534f'}},
             		{preTitle:"jq/js",prce:"80%",pclass:{width: '80%', background:'#f0ad4e'}},
             		{preTitle:"bootStrap",prce:"60%",pclass:{width: '60%', background:'#524FF1'}},
             		{preTitle:"Echarts",prce:"60%",pclass:{width: '60%', background:'#B349F2'}},
             		{preTitle:"Vue",prce:"40%",pclass:{width: '40%', background:'#F6F26B'}},
             		{preTitle:"webPack",prce:"20%",pclass:{width: '20%', background:'#6288EA'}},
             		{preTitle:"svn/git",prce:"70%",pclass:{width: '70%', background:'#3EDEC9'}}
             ]
			}
		}
	}
</script>
