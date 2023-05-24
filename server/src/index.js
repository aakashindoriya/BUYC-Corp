require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connect = require("./config/connect")
const userRoutes = require("./routes/user.routes")
const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => res.send("welcome to taskplanner"))
app.use("/user", userRoutes)


const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
    await connect()
    console.log(`listenning on Port :${PORT}`)
})