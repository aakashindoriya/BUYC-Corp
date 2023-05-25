const express = require("express")
const { ADDOEM, GETALLOEMS, GETOEMBYID } = require("../controllers/oem.controller")
const authMiddleware = require("../middlewares/auth")
const { checkAdmin, checkOem } = require("../middlewares/roleBaseAuth")
const { SIGNUP } = require("../controllers/user.controllers")
const app = express.Router()
app.post("/addoem", authMiddleware, checkOem, ADDOEM)
app.post("/signup", authMiddleware, checkAdmin, SIGNUP)
app.get("/", GETALLOEMS)
app.get("/:id", GETOEMBYID)

module.exports = app