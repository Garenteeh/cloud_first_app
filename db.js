const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  DB_NAME, // Database name
  DB_USER, // User
  DB_PASSWORD, // Password
  {
    host: '', // Host
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
