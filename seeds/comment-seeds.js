const { Comment } = require('../models')

const commentdata = [
    {
        comment_text: "First post on the Tech Blog",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I just hope this all works out",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Posting is cool!",
        user_id: 3,
        post_id: 3
    },
]

const seedComments = () => Comment.bulkCreate(commentdata)

module.exports = seedComments