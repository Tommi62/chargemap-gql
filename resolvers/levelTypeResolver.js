import LevelTypes from "../models/levelTypes";

 export default {
    Connections: {
        async LevelID(parent, args) {
            return await LevelTypes.findById(parent.LevelID);
        }
    },
 };