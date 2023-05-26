const express = require("express")
const { CREATE_OLD_CAR, DELETECARS, EDITCAR, GETALLCARS, GETCARBYID } = require("../controllers/oldcar.controller")
const authMiddleware = require("../middlewares/auth")
const { checkSeller } = require("../middlewares/roleBaseAuth")
const app = express.Router()

app.post("/addcar", authMiddleware, checkSeller, CREATE_OLD_CAR)
app.delete("/", authMiddleware, checkSeller, DELETECARS)
app.patch("/:carId", authMiddleware, checkSeller, EDITCAR)
app.get("/siglecar/:id", GETCARBYID)
app.get("/", GETALLCARS)
module.exports = app