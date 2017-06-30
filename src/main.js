import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Hello from './components/Hello.vue'

import Person from './components/Person.vue'
import VocSkill from './components/VocSkill.vue'
import Exprience from './components/Exprience.vue'
import Other from './components/Other.vue'

import 'bootstrap/dist/css/bootstrap.css' 
import 'css/base.css'
import 'css/index.css'
import 'assets/hotcss.js'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component : Hello
  },{
	path:'/hello',
	component:Hello
},{
	path:'/person',
	component:Person,
	children:[{
		path:'',
		component:resolve=>require(['./components/PerContent.vue'],resolve),
	}]
},{
	path:'/vocskill',
	component:VocSkill,
	children:[{
		path:'',
		component:resolve=>require(['./components/VocScontent.vue'],resolve),
	}]
},{
	path:'/exprience',
	component:Exprience,
	children:[{
		path:'',
		component:resolve=>require(['./components/ExpContent.vue'],resolve),
	}]
},{
	path:'/other',
	component:Other,
	children:[{
		path:'',
		component:resolve=>require(['./components/OtherContent.vue'],resolve),
	}]
}];

const router = new VueRouter({
  routes
});
var app = new Vue({
  router:router,
  render:h=>h(App)
}).$mount('#app');
