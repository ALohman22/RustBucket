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
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hashedPass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }),

    Project: sequelize.define('projects', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        projectImg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicleMake: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicleModel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vehicleYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
        },    
        vehicleClass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }),

    Component: sequelize.define('components', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        componentImg: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        componentTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        componentDiscription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        componentPrice:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    }),
}