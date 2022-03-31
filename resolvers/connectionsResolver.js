import Connections from "../models/connections";

 export default {
    Station: {
        async Connections(parent, args) {
            return await Connections.findById(parent.Connections);
        }
    },
 };