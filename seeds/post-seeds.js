const { Post } = require('../models')

const postdata = [
    {
        title: "Title 1",
        content: "Content goes here",
        user_id: 1
    },
    {
        title: "Title 2",
        content: "Content goes here Content goes here",
        user_id: 2
    },
    {
        title: "Title 3",
        content: "Content goes here Content goes here",
        user_id: 3
    },
    {
        title: "Title 4",
        content: "Content goes here Content goes here",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts