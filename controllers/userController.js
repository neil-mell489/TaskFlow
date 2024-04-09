const db = require("../models")
const bcrypt = require("bcrypt")
const {createToken} = require("../middleware/verifyToken")

const signup = async (req, res) => {
    try{
        const {email, username, password} = req.body

        // prep our query for execution
        const query = db.User.find({})
        // query.or([{field: value},{field: value}]) <-- checks for one or the other
        query.or([{username: username},{email: email}])
        // executes the query
        const foundUser = await query.exec()
        // returned array is NOT empty - found a user that exists already
        if(foundUser.length !== 0){
            return res.status(400).json({message: "Username or Email already taken."})
        }
        // salt and has the password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        // saving the hashed password, not the raw password
        req.body.password = hash
        // signup the user (create)
        const createdUser = await db.User.create(req.body)
        await createdUser.save()

        return res.status(201).json({message: "User successfully registered", userId: createdUser.id})

    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Internal server error"})
    }
}

const login = async (req, res) => {
    try{
        const {username, email, password} = req.body
        const query = db.User.find({})

        // looks for users that match both of these fields/values
        query.and([{username: username},{email: email}])
        const foundUser = await query.exec()
        // didn't find a user matching that email/username
        if(foundUser.length === 0){
            return res.status(400).json({error: "Invalid login credentials"})
        }
        // console.log(foundUser)
        const verifyPassword = await bcrypt.compare(password, foundUser[0].password)
        // passwords dont match!
        if(!verifyPassword){
            return res.status(400).json({error: "Invalid login credentials"})
        }
        // give the found user data to create our JWT
        const token = createToken(foundUser[0])
        // pass the frontend our JWT with the user ID
        return res.status(200).json({token, id: foundUser[0]._id})

    }catch(err){
        console.log(err)
        return res.status(500).json({error: "Internal server error"})
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const query = db.User.findById(id)
        query.select("-password")
        const foundUser = await query.exec()
        
        if (!foundUser) {
            return res.status(400).json({ error: "User not found" })
        }

        // Log the "Successfully found user" message only once
        console.log("Successfully found user:", foundUser)

        return res.status(200).json({ message: "Successfully found user", data: foundUser })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal server error" })
    }
}


module.exports = {
    getUser,
    signup, 
    login
}