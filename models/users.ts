'use strict';
import {Model,Sequelize} from  'sequelize';
module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      users.hasOne(models.userDetails, {
        foreignKey: 'userId',
        as: 'userDetail',
      })
      // define association here
    }
  }
  users.init({
    userId: {
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    passwordHash:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}, {
    sequelize,
    modelName: 'users',
  });
  return users;
};