const { DataTypes } = require('sequelize');
module.exports = {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    image_path_bf : {
        type: DataTypes.TEXT('medium'),
    },
    image_path_at : {
        type: DataTypes.TEXT('medium'),
    },
    image_path_lp : {
        type: DataTypes.TEXT('medium'),
    },
    image_path_gif : {
        type: DataTypes.TEXT('medium'),
    },
    record_time : {
        type: DataTypes.DATE,
    },
    record_time2 : {
        type: DataTypes.DATE,
    },
    lane : {
        type: DataTypes.INTEGER,
    },
    upload : {
        type: DataTypes.INTEGER('tiny'),
    }
}