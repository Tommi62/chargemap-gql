// schemas/index.js
import {gql} from 'apollo-server-express';
import stationSchema from './stationSchema';
import connectionSchema from './connectionSchema';
import connectionTypeSchema from './connectionTypeSchema';
import currentTypeSchema from './currentTypeSchema';
import levelTypeSchema from './levelTypeSchema';
import userSchema from './userSchema';

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
   connectionSchema,
   connectionTypeSchema,
   currentTypeSchema,
   levelTypeSchema,
   userSchema,
];
