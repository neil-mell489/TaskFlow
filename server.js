require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
port = 4000

const routes = require("./controllers")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", routes)

app.use((req, res) => {
    res.status(404).json({message: "These are not the routes you're looking for..."})
})

app.listen(port, () => {
    console.log(`Connected and running at port ${port} 😎`);
});