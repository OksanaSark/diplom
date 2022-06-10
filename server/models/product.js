const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    imageName: {type: DataTypes.STRING, allowNull: false},
    imageType: {type: DataTypes.STRING, allowNull: false},
    imageData: {type: DataTypes.BLOB('long' ), allowNull: false},
})

module.exports = Product
