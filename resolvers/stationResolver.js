import Station from "../models/station";   
 
 export default {
    Query: {
       stations: async (parent, args) => {
         return await Station.find();
       },
       station: async (parent, args) => {
          return await Station.findById(args.id);
       }
    },
 };