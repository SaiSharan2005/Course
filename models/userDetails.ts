'use strict';
import {Model,Sequelize} from  'sequelize';
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class userDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      userDetails.belongsTo(models.users, {
        foreignKey: 'userId',
        as: 'user',
      });

    }
  }
  userDetails.init({
    userDetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    collageName: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    profileImg: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    streak: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    userId: {
      type: DataTypes.CHAR(36), // Adjusted to CHAR(36)
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'userDetails',
  });
  return userDetails;
};