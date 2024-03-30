const mongoose = require("mongoose")

const calendarEvent = new mongoose.Schema ({
    eventName: {type: String, required: true},
    Date: String,
    Time: String,
    createdBy: {type: mongoose.Types.ObjectId, requried: true}
})

const Event = mongoose.model("Event", calendarEvent)

module.exports = Event 

