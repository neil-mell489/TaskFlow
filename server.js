require("dotenv").config()

const cors = require("cors")
const {PORT} = process.env
const controllers = require("./controllers/taskController")

const express = require("express")
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes

app.get("/", (req,res) => {
    res.send("This is working")
})

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)})
