import { AuthenticationError } from 'apollo-server-express';
import Connections from '../models/connections';
import Station from '../models/station';
import { rectangleBounds } from '../utils/rectangleBounds';

export default {
   Query: {
     stations: async (parent, args) => {
      let mapBounds;
      if(args.bounds) {
         mapBounds = rectangleBounds(
            args.bounds._northEast, 
            args.bounds._southWest
         );
        }

      if (args.start && args.limit && args.bounds) {
         return await Station.find({
            Location: {
               $geoWithin: {
                  $geometry: mapBounds,
               }
            }
          }).skip(args.start).limit(args.limit);
      }

      if (args.start && args.limit) {
         return await Station.find().skip(args.start).limit(args.limit);
      }

      if (args.start && args.bounds) {
         return await Station.find({
            Location: {
               $geoWithin: {
                  $geometry: mapBounds,
               }
            }
          }).skip(args.start);
      }

      if (args.limit && args.bounds) {
         return await Station.find({
            Location: {
               $geoWithin: {
                  $geometry: mapBounds,
               }
            }
          }).limit(args.limit);
      }

      if (args.start) {
         return await Station.find().skip(args.start);
      }

      if (args.limit) {
         return await Station.find().limit(args.limit);
      }
      
       return await Station.find({
         Location: {
            $geoWithin: {
               $geometry: mapBounds,
            }
         }
       })
     },
     station: async (parent, args) => {
      return await Station.findById(args.id);
   },
   },
   Mutation: {
      addStation: async (parent, args, context) => {
         if(!context.user) {
            throw new AuthenticationError('Not authorized');
         }
         const conns = await Promise.all(args.Connections.map(async (conn) => {
            const newConnection = new Connections(conn);
            const result = await newConnection.save();
            return result._id;
         }));

         const newStation = new Station({...args, Connections: conns});
         return newStation.save();
      },
      modifyStation: async (parent, args, context) => {
         if(!context.user) {
            throw new AuthenticationError('Not authorized');
         }
         let conns;
         if (args.Connections) {
            conns = await Promise.all(args.Connections.map(async (conn) => {
               const modifiedConnection = new Connections(conn);
               const result = await modifiedConnection.save();
               return result._id;
            }));
            return await Station.findByIdAndUpdate(args.id, {...args, Connections: conns}, {new: true});
         }

         return await Station.findByIdAndUpdate(args.id, args, {new: true});
      },
      deleteStation: async (parents, args, context) => {
         if(!context.user) {
            throw new AuthenticationError('Not authorized');
         }
         return await Station.findByIdAndDelete(args.id);
      }
   }
 };
 

/*export default {
  Query: {
    stations: async (parent, args) => {
       const mapBounds = rectangleBounds(args.mapBounds._northEast, args.mapBounds._southWest);
      return await Station.find({
         Location: {
            $geoMetry: mapBounds,
         }
      })
        .populate({
          path: 'Connections',
          populate: {
            path: 'ConnectionTypeID LevelID CurrentTypeID',
          },
        });
    },
  },
};*/
