import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     stations: [Station],
     station(id: ID!): Station,
   }
   
   type Station {
      id: ID
      Title: String,
      Town: String,
      AddressLine1: String,
      StateOrProvince: String,
      Postcode: String,
      Location: Location,
      Connections: Connections,
   }

   type Location {
       type: String,
       coordinates: [Float],
   }
`;