require('dotenv').config();
module.exports = {

  "development": {
    "username": process.env.DB_DEV_USERNAME,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.NAME_DATABASE,
    "host": process.env.HOST,
    "dialect": process.env.DIALECT,
    "port": process.env.PORT,
  },
  "test": {
    "username": "root",
    "password": "",
    "database": 'immobilier',
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3306"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
