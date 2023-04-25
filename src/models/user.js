const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    last_name: {
        type: String
    }
})

module.exports = mongoose.model('user', UserScheme)
