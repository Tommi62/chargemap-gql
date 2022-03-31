import ConnectionTypes from "../models/connectionTypes";

 export default {
    Connections: {
        async ConnectionTypeID(parent, args) {
            return await ConnectionTypes.findById(parent.ConnectionTypeID);
        }
    },
 };