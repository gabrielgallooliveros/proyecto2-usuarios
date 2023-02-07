//? metodos de verbos RUTAS

const usersService = require("./users.services")
const router = require("express").Router()
router.get('/users', usersService.getAllUsers)
router.get('/users/:id', usersService.getUserID)
router.post('/users', usersService.postUsers)

module.exports = router
