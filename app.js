// server.js
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schemas/index';
import resolvers from './resolvers/index';
import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import helmet from 'helmet';
import db from './db/db';
import { checkAuth } from './utils/auth';

(async () => {
   try {
      const server = new ApolloServer({
         typeDefs,
         resolvers,
         context: async ({req}) => {
           if (req) {
             const user = await checkAuth(req);
             return { user, req };
           }
         },
       });
      
   
       const app = express();
       app.enable('trust proxy');
       app.use(helmet.expectCt());
       app.use(helmet.frameguard());
       app.use(helmet.hidePoweredBy());
       app.use(helmet.hsts());
       app.use(helmet.ieNoOpen());
       app.use(helmet.noSniff());
       app.use(helmet.originAgentCluster());
       app.use(helmet.permittedCrossDomainPolicies());
       app.use(helmet.referrerPolicy());
       app.use(helmet.xssFilter());
   
       await server.start();
       
       server.applyMiddleware({app});
       
       app.use ((req, res, next) => {
         if (req.secure) {
            // request was via https, so do no special handling
            next();
         } else {
            // request was via http, so redirect to https
            res.redirect(`https://${req.headers.host}${req.url}`);
         }
       });
   
       db.on('connected', () => {
        app.listen({port: 3000}, () =>
           console.log(
               `🚀 Server ready at https://tommi-server.jelastic.metropolia.fi${server.graphqlPath}`),
        );
       });
   } catch (e) {
      console.log('server error: ' + e.message);
   }
})();
