const express = require('express')
const app = express()
const userRouter = require("./users/users.router")
app.use(express.json())

app.get('/user', (req, res) => {
    res.status(201).json({
        message: ' Super Server ok'
    })
})


app.use('/', userRouter)

//! escuchando mi HOST
app.listen(9000, () => {
    console.log('server started at: http://localhost9000')
})
module.exports = app


