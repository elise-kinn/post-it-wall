const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    content:{
        type: String, 
        required: true
    },
    color:{
        type: String, 
        default: "#DEDEDE"
    },
    creationDate:{
        type: Date, 
        default: Date.now()
    },
    updateDate:{
        type: Date, 
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', PostSchema)