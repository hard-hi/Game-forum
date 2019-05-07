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
        console.log(data)
        // var result={username:data.username,password:data.password};
        connection.query('select Uname from user where Uname=? ',
        [data.username],function (err, results){
          if(err){
              console.log(err.message);
              return
          }
          console.log(results);
          if(results!=0)
          {
            console.log('err')
           res.send(false)
          }
          else
          {
            connection.query('INSERT INTO user(UID,Uname,Upassword) VALUes(2,?,?) ',
            [data.username,data.password],function (err, results){
          if(err){
              console.log(err);
          }
          
          res.send(true)

          console.log('输入成功')
        })

          }
        }
        )
        

})

module.exports = router;
