const express = require("express");
const path= require("path");
const router = express.Router();
const app = express();
const port = 3000;
const client =require("./db")
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
    res.sendFile(path.join(__dirname+'/index.html'));
  });
// router.post('/dashboard', async (req,res)=>{
//   try {
//     const { username, usewin } = request.body

//     pool.query('INSERT INTO users (username, email) VALUES ($1, $2)', [name, email], (error, results) => {
     
//   } catch (err) {
//     console.log(err.message);
//   }
// })
//   router.get('dashboard',function(req,res){
//     res.sendFile(path.join(__dirname+'/dashboard.html'));
//   });
  app.use('/', router);
app.listen(port,()=>{
    console.log(`app listing port ${port}`);
})