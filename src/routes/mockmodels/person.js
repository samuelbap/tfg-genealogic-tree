import {DataTypes} from "sequelize";
import {sequelize} from "../../lib/database/dbGenealogicTree";

export const Person = sequelize.define(
  "person",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
