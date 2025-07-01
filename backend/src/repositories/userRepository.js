const {
    User
} = require('../database/User.js');

exports.getAllUsers = async () => {
    return User;
}

exports.createUser = async (userData) => {
    const newUser = {
        id: User.length + 1,
        ...userData
    };
    User.push(newUser);
    return newUser;
}

exports.updateUser = async (id, userData) => {
    const userIndex = User.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
        throw new Error('User not found');
    }
    User[userIndex] = { ...User[userIndex], ...userData };
    return User[userIndex];
}

exports.deleteUser = async (id) => {
    const userIndex = User.findIndex(user => user.id === parseInt(id));
    if (userIndex === -1) {
        throw new Error('User not found');
    }
    User.splice(userIndex, 1);
    return true
}