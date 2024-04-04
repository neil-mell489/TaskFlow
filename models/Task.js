const mongoose = require("mongoose");

const calendarEventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    creationDate: { type: Number},
    createdAt: { type: Number},
    createdBy: { type: mongoose.Types.ObjectId, ref: "currentUser" }
});


const Event = mongoose.model("Event", calendarEventSchema);

module.exports = Event;
