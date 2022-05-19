const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    phoneNumber: { type: DataTypes.STRING },
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING }
})

module.exports = User