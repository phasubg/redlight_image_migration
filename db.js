const { Sequelize } = require('sequelize');
const SnapData = require('./models/SnapData')
const _sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT,
    // logging: console.log,
})
const _SnapData = _sequelize.define('snap_data',SnapData ,{ timestamps: false })
module.exports = {
    sequelize:_sequelize,
    SnapData:_SnapData
}
