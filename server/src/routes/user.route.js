const express = require("express")
const { LOGIN, SIGNUP } = require("../controllers/user.controllers")

const app = express.Router()

app.post("/login", LOGIN)
app.post("/signup", SIGNUP)

module.exports = app