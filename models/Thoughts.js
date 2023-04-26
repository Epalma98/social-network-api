const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            unique: true,

        },
        username: {
            type: String,
            required: true,
            
        },
        reactions: [reactionSchema],
    }
)

const Thoughts = model('thoughts', thoughtsSchema);
module.exports = Thoughts;