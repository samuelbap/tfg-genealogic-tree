import {Sequelize} from "sequelize";

export const sequelize = new Sequelize("GenealogicTree", "postgres", "p3p3", {
  host: "localhost",
  dialect: "postgres",
  // logging: false,
  pool: {max: 10, min: 5, idle: 30000, acquire: 60000},
});

// we instantiate our models
const Story = defineStory(sequelize, DataTypes);
const StoryList = defineStoryList(sequelize, DataTypes);

// relations between models
StoryList.hasOne(Story, {foreignKey: "cid"});
Story.belongsTo(StoryList, {foreignKey: "cid"});

export {sequelize, Story, StoryList};
