const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Employee = sequelize.define('Employee', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  monthlySalary: { type: DataTypes.DECIMAL(10,2) },
  joinDate: { type: DataTypes.DATEONLY },
  mpfEligible: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Employee;