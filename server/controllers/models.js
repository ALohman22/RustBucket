const {DataTypes} = require('sequelize')
const { sequelize } = require('../util/database')

module.exports = {
    User: sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: DataTypes.STRING,
        hashedPass: DataTypes.STRING
    }),

    Project: sequelize.define('projects', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        projectImg: DataTypes.STRING,
        vehicleMake: DataTypes.STRING,
        vehicleModel: DataTypes.STRING,
        vehicleYear: DataTypes.INTEGER,
        vehicleClass: DataTypes.STRING,
    }),

    Component: sequelize.define('components', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        componentImg: DataTypes.STRING,
        componentTitle: DataTypes.STRING,
        componentDiscription: DataTypes.STRING,
    }),
}