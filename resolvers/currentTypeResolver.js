import CurrentTypes from "../models/currentTypes";

 export default {
    Connections: {
        async CurrentTypeID(parent, args) {
            return await CurrentTypes.findById(parent.CurrentTypeID);
        }
    },
 };