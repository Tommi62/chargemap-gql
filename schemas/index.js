// schemas/index.js
import {gql} from 'apollo-server-express';
import stationSchema from './stationSchema';
import connectionsSchema from './connectionsSchema';
import connectionTypeSchema from './connectionTypeSchema';
import currentTypeSchema from './currentTypeSchema';
import levelTypeSchema from './levelTypeSchema';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
   linkSchema,
   stationSchema,
   connectionsSchema,
   connectionTypeSchema,
   currentTypeSchema,
   levelTypeSchema,
];
