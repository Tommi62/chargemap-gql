// resolvers/index.js
import stationResolver from './stationResolver';
import connectionsResolver from './connectionsResolver';
import connectionTypeResolver from './connectionTypeResolver';
import currentTypeResolver from './currentTypeResolver';
import levelTypeResolver from './levelTypeResolver';

export default [
    stationResolver, 
    connectionsResolver, 
    connectionTypeResolver,
    currentTypeResolver,
    levelTypeResolver,
];
