const sequelize = require('../config/connection')
const { User, Post } = require('../models')

const userdata = [
    {
        username: 'dburatto',
        password: 'password123',
        id: 1
    },
    {
        username: 'waterman',
        password: 'password123',
        id: 2
    },
    {
        username: 'earthman',
        password: 'password123',
        id: 3
    },
    {
        username: 'dmoney',
        password: 'password123',
        id: 4
    },
    {
        username: 'arty',
        password: 'password123',
        id: 5
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooke: true})

module.exports = seedUsers