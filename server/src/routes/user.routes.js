const express = require("express")
const { LOGIN, SIGNUP } = require("../controllers/user.controllers")
const checkAdmin = require("../middlewares/checkAdmin")

const app = express.Router()

app.post("/login", LOGIN)
app.post("/signup", checkAdmin, SIGNUP)

module.exports = app