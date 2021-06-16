const express = require("express");
const routes=require("../src/routes/index");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.static("./"));
app.use(bodyParser.json());
app.use("/", routes);
app.use("/players", routes);
app.use("/data",routes);
app.listen(port, () => {
    console.log(`app listing port ${port}`);
});
module.exports=app;
