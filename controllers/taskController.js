const db = require("../models")


const getEvent = async(req,res) => {
    try{
        const event = await db.Event.find()
    } catch {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getEvent, 
}