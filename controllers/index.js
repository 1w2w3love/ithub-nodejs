
var db=require('./db')

exports.showIndex=(req,res)=>{
	db.query('select * from topic_categories',function(err,results){
		if (err) {
			res.render('505.html',{
				err:err.message
			})
		}
	res.render('index.html',{
		results:results
	})

	})
}