import CurrentTypes from "../models/currentTypes";

export default {
    Query: {
      currenttypes: async (parent, args) => await CurrentTypes.find(),
    },
    Connections: {
      CurrentTypeID: async (parent, args) => {
        return await CurrentTypes.findById(parent.CurrentTypeID);
      },
    },
  };
  
  