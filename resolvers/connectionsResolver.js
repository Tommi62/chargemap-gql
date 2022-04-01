import Connections from "../models/connections";

export default {
    Station: {
      Connections: async (parent, args) => {
        return await Connections.find({ _id: { $in: parent.Connections } });
      },
    },
  };
  