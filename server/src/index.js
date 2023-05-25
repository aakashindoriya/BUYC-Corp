require("dotenv").config()
const express = require("express")
const cors = require("cors")
const connect = require("./config/connect")
const userRoutes = require("./routes/user.route")
const oemRoutes = require("./routes/oem.route")
const carRoute = require("./routes/oldcar.route")
const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (req, res) => res.send("welcome to taskplanner"))
app.use("/user", userRoutes)
app.use("/oem", oemRoutes)
app.use("/car", carRoute)


const PORT = process.env.PORT || 8080
app.listen(PORT, async () => {
    await connect()
    console.log(`listenning on Port :${PORT}`)
})