const express = require("express")
const { CREATE_OLD_CAR, DELETECARS, EDITCAR } = require("../controllers/oldcar.controller")
const authMiddleware = require("../middlewares/auth")
const { checkOem } = require("../middlewares/roleBaseAuth")
const app = express.Router()

app.post("/addcar", authMiddleware, checkOem, CREATE_OLD_CAR)
app.delete("/:listings", DELETECARS)
app.patch("/:carId", EDITCAR)
module.exports = app