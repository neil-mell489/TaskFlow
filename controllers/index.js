const router = require("express").Router()
const { verifyToken } = require("../middlewares/verifyToken")
const eventController = require("./taskController")
const userCtrl = require("./userController")

router.get("/event", eventController.getEvent)
router.post("/event", eventController.createEvent)
router.put("/event/:id", eventController.updateEvent)
router.delete("/event/:id", eventController.deleteEvent)

router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user/:id", verifyToken, userCtrl.getUser)

module.exports = router

