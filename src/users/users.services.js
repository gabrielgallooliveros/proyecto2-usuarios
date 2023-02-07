const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    usersControllers.findAllUsers()
        .then(data => {res.status(200).json(data)})
        .catch(error => {res.status(400).json(error)})
}

const getUserID = (req, res) => {
    const id = Number(req.params.id)
    usersControllers.findAllUsersId(id)
        .then(data => {
            if(data){res.status(200).json(data)}
            else{(res.status(404).json({message : 'ID NOT FOUND'}))}
        })
        .catch(error => {res.status(400).json(error)})
}

const postUsers = (req, res) => {
    const usersObjet = req.body
    usersControllers.createUsers(usersObjet)
    .then(data => {res.status(201).json(data)})
    .catch(error => {res.status(400).json(error)})

}

module.exports = {
    getAllUsers,
    getUserID,
    postUsers
}
