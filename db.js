const { Sequelize } = require('sequelize')
const  db_name= process.env.DB_NAME;
const  db_user= process.env.DB_USER;
const db_pwd= process.env.DB_PASSWORD;
const db_host= process.env.DB_HOST;



// database
const sequelize = new Sequelize(
    db_name, // Database name
    db_user, // User
    db_pwd, // Password
  {
    host: db_host, // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
