const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const client = require("./db");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set("views",path.join(__dirname, "views"));
router.get("/", function(_req, res) {
    res.render("index");
});
app.use(express.static("./"));
app.use(bodyParser.json());
client.connect();
// eslint-disable-next-line no-unused-vars
router.post("/data", async(req, res)=> {
    var p1 = req.body.param1;
    var w1 = req.body.param3;
    var p2 = req.body.param2;
    var w2 = req.body.param4;
    await client.query(`INSERT INTO users(username,userwin) VALUES('${p1}',${w1}),('${p2}',${w2})`, (err) => {
        if(err)
            console.error(err);
        return res.status(200).render("showPlayers.hbs");   
    });
        
});
router.get("/players",async(req,res)=>{
    await client.query("select * from users", (err, rows) => {
        if(err) throw err;
        res.render("showPlayers.hbs",{items:rows.rows});
    });
});
app.use("/", router);
app.listen(port, () => {
    console.log(`app listing port ${port}`);
});
module.exports=app;