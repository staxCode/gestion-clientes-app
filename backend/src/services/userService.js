const userRepository = require('../repositories/userRepository.js');

exports.getAllUsers = async () => {
    try {
        const users = await userRepository.getAllUsers();
        return users;
    } catch (error) {
        throw new Error('Error retrieving users: ' + error.message);
    }
}

exports.createUser = async (userData) => {
    try {
        const newUser = await userRepository.createUser(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
}

exports.updateUser = async (id, userData) => {
    try {
        const updatedUser = await userRepository.updateUser(id, userData);
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
}

exports.deleteUser = async (id) => {
    try {
        await userRepository.deleteUser(id);
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
}