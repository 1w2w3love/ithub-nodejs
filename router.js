//这个 文件夹主要就是负责分配路由器，主要分为三大模块
// 	用户模块
//	话题模块 
// 	评论模块
// 我们针对用户、话题、评论三大内容单独划分一个用户处理模块

// router.js只负责做一件事情，根据不同的请求方式+请求路
// 径分发到具体的模块处理函数
const indexCtrl=require('./controllers/index.js')
const signCtrl=require('./controllers/user.js')
const topicCtrl=require('./controllers/topic.js')

// 0、引入express

const express=require('express')

// 1、创建路由容器

const router=express.Router()

// 2、配置路由表

//首页

router.get('/',indexCtrl.showIndex)

//用户页面

router
	.get('/signin',signCtrl.showSignin)
	.get('/signup',signCtrl.showSignup)
	.get('/topic/create',topicCtrl.topicCreate)
//将router放出去，让他的引用者可以使用其中的数据
module.exports=router