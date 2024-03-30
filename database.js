const mongoose = require("mongoose")
const {MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI)

mongoose.connection
.on("connected", () => {console.log("connect to MongoDB")})
.on("close", () => {console.log("You are disconnected from mongoose")})
.on("error", (error) => {console.log(error)})