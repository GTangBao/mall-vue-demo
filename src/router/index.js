import Vue from 'vue'
import VueRouter from 'vue-router'

//依赖引入组件
const  Home = () => import('../views/home/Home');
const  Cart = () => import('../views/cart/Cart');
const  Category = () => import('../views/category/Category');
const  Profile = () => import('../views/profile/Profile');

//按照插件
Vue.use(VueRouter)

//创建路由对象
const  routes = [
  {
    path:'',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

const  router = new VueRouter({
  routes,
  mode:'history'
})

export default router;
