const { User } = require('../models')

const userdata = [
    {
        id: 1,
        username: 'dburatto',
        password: 'password123',
    },
    {
        id: 2,
        username: 'waterman',
        password: 'password123',
    },
    {
        id: 3,
        username: 'earthman',
        password: 'password123',
    },
    {
        id: 4,
        username: 'dmoney',
        password: 'password123',
    },
    {
        id: 5,
        username: 'arty',
        password: 'password123',
    }
]

const seedUsers = () => User.bulkCreate(userdata)

module.exports = seedUsers