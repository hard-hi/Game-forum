var express = require('express');
var router = express.Router();
var mysql = require('mysql');
 
let connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root', 
    password : 'w12345',
    database : 'Game'
});
connection.connect(function(err) {
  if (err) {
  console.error('连接失败: ' + err.stack);
  return;
  }
  
console.log('连接成功 id ' + connection.threadId);
});





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
        let data=req.body;
        // var result={username:data.username,password:data.password};
        console.log(data.username)
        connection.query('select Uname,Upassword from user where Uname=? ',
      data.username,function (err,results){
          if(err){
              console.log('err:--'+err.message);
          }
          console.log(results[0].Uname);
          if(data.password==results[0].Upassword&&data.username==results[0].Uname)
          {
            var  result={a:1}
            res.send(result)
            console.log('ok')
            // break
          }
          else
          {
            var  result={a:0}
            res.send(result)
            console.log('dok')
          }
        //   else
        //   {
        //   //   connection.query('INSERT INTO user(UID,Uname,Upassword) VALUes(2,?,?) ',
        //   //   [data.username,data.password],function (err, results){
        //   // if(err){
        //   //     console.log(err);
        //   // }
        //   // console.log('3123:'+results.message);
        //   // console.log('ok++')
        // // })
        //   }
        //   console.log('ok')
        })
      

        

})

module.exports = router;
