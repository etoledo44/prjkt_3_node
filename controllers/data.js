const User = require('../models/user')
module.exports = {
    show(req, res){
        User.findAll().then(users => {
            return res.json(users)
        })
    },
    async create(req, res){
        const {name, email, password, role} = req.body
        const user = {name, email, password, role}

        const response = await User.create(user)


        return res.json(response)
        
    }
}