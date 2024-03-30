const router = require("express").Router()
const eventController = require("./taskController")

router.get("/event", eventController.getEvent)
router.post("/event", eventController.createEvent)
router.put("/event/:id", eventController.updateEvent)
router.delete("/event/:id", eventController.deleteEvent)

module.exports = router

