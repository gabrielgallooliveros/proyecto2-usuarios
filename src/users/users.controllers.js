const usersBD = []
let baseUserId = 1
const findAllUsers = async () => {
    return await usersBD
}

const findAllUsersId = async (id) => {
const filteredUsers = await usersBD.find(users => users.id === id)
    return filteredUsers
}
const createUsers = async (usersObjet) => {
    const newUser = {
        id: baseUserId++,
        firstName : usersObjet.firstName,
        lastName: usersObjet.lastName,
        email: usersObjet.email,
        password: usersObjet.password,
        age: usersObjet.age
    }
    await usersBD.push(newUser)
    return newUser
}
module.exports = {
    findAllUsers,
    findAllUsersId,
    createUsers
}
