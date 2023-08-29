const express = require("express")
const { UserInfo, AliensInfo, AlienInfo, Updatealiegn, Deletealiegn } = require("./Users")
const router =express.Router()
router.get("/",AliensInfo)
router.post("/",UserInfo)
router.get("/:name",AlienInfo)
router.patch("/:name",Updatealiegn)
router.delete("/:name",Deletealiegn)    
module.exports = router