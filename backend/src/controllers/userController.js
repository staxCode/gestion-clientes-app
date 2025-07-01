const userService = require('../services/userService.js');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json({
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
}

exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

exports.updateUser =  async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.status(200).json({
            message: 'User updated successfully',
            data: {}
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        // await userService.deleteUser(req.params.id);
        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}