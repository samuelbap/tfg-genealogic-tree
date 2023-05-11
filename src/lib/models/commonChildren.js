import {DataTypes} from "sequelize";
import {sequelize} from "../database/dbGenealogicTree";

export const CommonChildren = sequelize.define(
  "commonChildren",
  {
    idChildren: {
      type: DataTypes.INTEGER,
    },
    idDocument: {
      type: DataTypes.INTEGER,
    },
    idPartnership: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
