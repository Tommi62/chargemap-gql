import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     stations(start: Int, limit: Int, bounds: Bounds): [Station],
     station(id: ID!): Station,
   }

   extend type Mutation {
      addStation(
         Connections: [ConnectionInput],
         Title: String,
         Town: String,
         AddressLine1: String,
         StateOrProvince: String,
         Postcode: String,
         Location: LocationInput,
      ): Station,
      modifyStation(
         id: ID!,
         Connections: [ConnectionInput],
         Title: String,
         Town: String,
         AddressLine1: String,
         StateOrProvince: String,
         Postcode: String,
         Location: LocationInput,
      ): Station,
      deleteStation(id: ID!): Station,
   }
   
   type Station {
      id: ID
      Title: String,
      Town: String,
      AddressLine1: String,
      StateOrProvince: String,
      Postcode: String,
      Location: Location,
      Connections: [Connections],
   }

   type Location {
       type: String,
       coordinates: [Float],
   }

   input LocationInput {
      coordinates: [Float],
  }

   input Bounds {
      _southWest: LatLng,
      _northEast: LatLng
   }

   input LatLng {
      lat: Float,
      lng: Float
   }
`;