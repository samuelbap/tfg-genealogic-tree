import {DataTypes} from "sequelize";
import {sequelize} from "../database/dbGenealogicTree";
import {DocumentLocation} from "./documentLocation";

export const Document = sequelize.define(
  "document",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    documentType: {
      type: DataTypes.STRING,
    },
    eventLocation: {
      type: DataTypes.INTEGER,
    },
    issueDate: {
      type: DataTypes.DATE,
    },
    imageNumber: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    locationId: {
      type: DataTypes.INTEGER,
    },
    rootPersonId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
