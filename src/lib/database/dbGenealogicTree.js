import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("GenealogicTree", "postgres", "p3p3", {
  host: "localhost",
  dialect: "postgres",
});
