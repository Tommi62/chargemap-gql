import ConnectionTypes from "../models/connectionTypes";

export default {
    Query: {
      connectiontypes: async (parent, args) => await ConnectionTypes.find(),
    },
    Connections: {
      ConnectionTypeID: async (parent, args) => {
        return await ConnectionTypes.findById(parent.ConnectionTypeID);
      },
    },
  };
  
  
