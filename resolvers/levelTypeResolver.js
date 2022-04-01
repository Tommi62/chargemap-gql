import LevelTypes from "../models/levelTypes";

export default {
    Query: {
      leveltypes: async (parent, args) => await LevelTypes.find(),
    },
    Connections: {
      LevelID: async (parent, args) => {
        return await LevelTypes.findById(parent.LevelID);
      },
    },
  };
  
  