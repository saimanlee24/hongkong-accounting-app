# Backend Setup & Testing Guide

This backend is built with Express.js, Sequelize, and SQLite3 for a payroll/accounting application.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the server

```bash
npm start
```
The server will run at `http://localhost:3000`

## 3. Test API Endpoints

### Get all payrolls
```bash
curl http://localhost:3000/api/payroll
```

### Add a payroll
```bash
curl -X POST http://localhost:3000/api/payroll \
  -H "Content-Type: application/json" \
  -d '{"employeeId":1,"month":"2025-08","basicSalary":5000,"allowances":200,"deductions":50,"netPay":5150}'
```

## 4. Database

A SQLite database file (`database.sqlite`) will be created automatically in the project root.

## 5. Customize

- Add more models, controllers, and routes as needed.
- For authentication, validation, etc., ask Copilot for code examples!

---
For any questions or to request more features, ask Copilot!
