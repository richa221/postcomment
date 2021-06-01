const express = require("express");
const path= require("path");
const router = express.Router();
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const client =require("./db");
const { log } = require("console");
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
const template= path.join(__dirname,'../views')
const query=(async () => {
  await client.connect();
  client.query(`select * from users`,(err,result)=>{
  if(!err){
  console.log(result.rows);}
  client.end();
})
}) 
query ();
router.get('/',function(req,res){
    res.render('index')
  });
  router.post('/dashboard',async(req,res)=>{
      const p1=req.body.firstuser_name;
      const p2=req.body.seconduser_name;
      if(p1!=''&& p2!=''){
        await res.render('dashboard.hbs',{
            player1:p1,
            player2:p2
        });
    }else
    await res.render("index")
  });
  app.use('/', router);
  
app.listen(port,()=>{
    console.log(`app listing port ${port}`);
})