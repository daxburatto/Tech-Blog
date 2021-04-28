const sequelize = require('../config/connection')
const { User, Post } = require('../models')

const userdata = [
    {
        username: 'dburatto',
        email: 'dburatto@email.com',
        password: 'password123'
    },
    {
        username: 'waterman',
        email: 'wet@email.com',
        password: 'password123'
    },
    {
        username: 'earthman',
        email: 'dry@email.com',
        password: 'password123'
    },
    {
        username: 'dmoney',
        email: 'dmoney@email.com',
        password: 'password123'
    },
    {
        username: 'arty',
        email: 'arty11@email.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooke: true})

module.exports = seedUsers