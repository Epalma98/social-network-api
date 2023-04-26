const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            max_length: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,

        },
        thoughts: [thoughtsSchema],
        
        friends: {

        }
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

const User = model('User', userSchema);

module.exports = User;