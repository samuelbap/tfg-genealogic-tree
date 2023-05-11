import {DataTypes} from "sequelize";
import {sequelize} from "../database/dbGenealogicTree";

export const Protagonist = sequelize.define(
  "protagonist",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idDocument: {
      type: DataTypes.INTEGER,
    },
    parnert1: {
      type: DataTypes.INTEGER,
    },
    parnert2: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
