<template>
	<div class="tab-content">
        <nav class="top">
	   	   <div class="midenghit">
	   	    <div class="media-list">
	       	  <i></i>
	       	  <h2>我的技能</h2>
	   	   	</div>    	  	 	
	   	 </div>
	   </nav>
	   <nav class="center-block">
	   	 <div class="modal-title">
	   	    <h2>技能熟练程度：</h2>
	   	 </div>	   	 
	   	 	<myprececonment></myprececonment>
	   </nav>
	</div>
</template>
<script type="text/javascript">
    import myprececonment from 'components/myPrececonment.vue'
	import 'css/vocskill.css'
	export default{
		components:{myprececonment},
		data(){
			return{ 
			}
		}
	}
</script> 