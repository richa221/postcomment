const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("./"));
app.use(bodyParser.json());
const client = require("../model/db");
app.set("view engine", "hbs");
app.set("views",path.join(__dirname, "../views/"));
client.connect((err) =>{
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
const HomePage = function(req,res){
    res.status(200).render("index.hbs");
};
const createPlayer= async(req, res)=> {
    var p1 = req.body.player1Name;
    var w1 = req.body.player1Win;
    var p2 = req.body.player2Name;
    var w2 = req.body.player1Win;
    await client.query(`INSERT INTO users(username,userwin) VALUES('${p1}',${w1}),('${p2}',${w2})`, (err) => {
        if(err){
            return res.status(400).send("An error has occurred");
        }
        else{
            console.log("data insert successfully");
            return res.status(200).render("showPlayers.hbs");   
        }
    });
        
};
const showPlayers =  async function(req,res){
   
    await client.query("select * from users", (err, rows) => {
        if(err){
            return res.status(400).send("An error has occurred");
        }
        else{
            return res.status(200).render("showPlayers.hbs",{items:rows.rows});
        }
    });

};
module.exports={
    HomePage,
    createPlayer,
    showPlayers
};