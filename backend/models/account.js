const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Account extends Model {}

Account.init({
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM('asset', 'liability', 'income', 'expense', 'equity'), allowNull: false },
  currency: { type: DataTypes.STRING, defaultValue: 'HKD' },
  balance: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
}, { sequelize, modelName: 'account' });

module.exports = Account;