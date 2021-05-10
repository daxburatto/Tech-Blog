const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')

router.get('/', (req, res) => {

})

router.get('/post/:id', (req, res) => {

})

router.get('/login', (req, res) => {

})

module.exports = router