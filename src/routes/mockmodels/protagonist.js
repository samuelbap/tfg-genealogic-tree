import {DataTypes} from "sequelize";
import {sequelize} from "../../lib/database/dbGenealogicTree";

export const Protagonist = sequelize.define(
  "protagonist",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idPerson: {
      type: DataTypes.INTEGER,
    },
    idDocument: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
