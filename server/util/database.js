require('dotenv').config()
const {DATABASE_URL} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgresql://ALohman22:v2_43X3d_4Zhygn9pZM34NQdfD9hnTHj@db.bit.io:5432/ALohman22/Zoo', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}