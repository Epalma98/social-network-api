const { User, Thoughts } = require('../models');

const userController = {
    async getUsers(req, res) {
        try {
            const dbUserData = await User.find() 


    async getSingleUser(req,res) {
        try {
            const dbUserData = await User.findOne({ _id: req.params.id })
                .populate('friends')
                .populate('thoughts')
                .select('-__v');
            if (!dbUserData) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }
            res.json(dbUserData);
        }
    }



    async deleteUser(req, res) {
        try {
            const dbUserData = await User.findOneAndDelete({ _id: req.params.id })
            if (!dbUserData) { 
        }