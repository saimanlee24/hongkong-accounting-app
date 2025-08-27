const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Employee = require('./Employee');

const Payroll = sequelize.define('Payroll', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  employeeId: { type: DataTypes.INTEGER, references: { model: Employee, key: 'id' } },
  month: { type: DataTypes.STRING },
  basicSalary: { type: DataTypes.DECIMAL(10,2) },
  allowances: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  deductions: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  netPay: { type: DataTypes.DECIMAL(10,2) }
});

Payroll.belongsTo(Employee, { foreignKey: 'employeeId' });

module.exports = Payroll;