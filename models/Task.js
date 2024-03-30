const mongoose = require("mongoose")
const {MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI)

mongoose.connection
.on("connected", () => {console.log("connected to MongoDB")})
.on("close", () => {console.log("You are disconnected from mongoose")})
.on("error", (error) => {console.log(error)})



const calendarEvent = new mongoose.Schema ({
    eventName: {type: 'String', required: true},
    description: {type: 'String', required: true },
    creationDate: {type: 'String', required: true},
    createdAt: {type: 'String', required: true},
    createdBy: {type: mongoose.Types.ObjectId, requried: true}
})

const Event = mongoose.model("Event", calendarEvent)

module.exports = Event 

