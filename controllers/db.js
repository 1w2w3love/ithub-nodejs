//从数据库中拉取数据

const mysql=require('mysql')

const connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'123456',
	database:'ithub'
})

module.exports=connection
