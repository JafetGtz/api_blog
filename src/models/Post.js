import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Post = sequelize.define(
  'Post', 
  {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  author: {
      type: DataTypes.STRING
  },
  title: {
      type: DataTypes.STRING
  },

  content: {
    type: DataTypes.STRING
},

date_create: {
    type: DataTypes.STRING
},

image_post: {
    type: DataTypes.STRING
},


})
