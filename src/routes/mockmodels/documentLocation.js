import {DataTypes} from "sequelize";
import {sequelize} from "../../lib/database/dbGenealogicTree";
import {Document} from "./document.js";

export const DocumentLocation = sequelize.define(
  "DocumentLocation",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.INTEGER,
    },
    municipality: {
      type: DataTypes.DATE,
    },
    parish: {
      type: DataTypes.INTEGER,
    },
    institution: {
      type: DataTypes.STRING,
    },
    idBook: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
