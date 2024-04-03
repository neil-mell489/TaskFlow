const mongoose = require("mongoose");

const calendarEventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Event = mongoose.model("Event", calendarEventSchema);

module.exports = Event;
