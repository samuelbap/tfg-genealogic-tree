const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("GenealogicTree", "username", "p3p3", {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

sequelize.close();
