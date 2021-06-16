const express = require("express");
const router = express.Router();
const homeCtrl=require("../controller/homeController");
router
    .route("/")
    .get(homeCtrl.HomePage);
router
    .route("/players")
    .get(homeCtrl.showPlayers);
router
    .route("/data")
    .post(homeCtrl.createPlayer);
module.exports=router;