// schemas/index.js
import animalSchema from './animalSchema';
import speciesSchema from './speciesSchema';
import categorySchema from './categorySchema';
import {gql} from 'apollo-server-express';

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
   animalSchema,
   speciesSchema,
   categorySchema,
];
