const { Post } = require('../models')

const postdata = [
    {
        title: "How to come up with unique names",
        content: "You know what I have no idea...",
        user_id: 1
    },
    {
        title: "Why your tech blog doesnt need to be interesting",
        content: "Because it's not even real!",
        user_id: 2
    },
    {
        title: "I can't come up with anything else",
        content: "Someone please help me come up with content",
        user_id: 3
    },
    {
        title: "Randomness is super fun",
        content: "Austin Texas is a cool place to live",
        user_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts