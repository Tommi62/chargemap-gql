// server.js
import {ApolloServer} from 'apollo-server-express';
import typeDefs from './schemas/index';
import resolvers from './resolvers/index';
import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import db from './db/db';
import { checkAuth } from './utils/auth';

(async () => {
   try {
      const configurations = {
         // Note: You may need sudo to run on port 443
         production: { ssl: true, port: 443, hostname: 'tommi-server.jelastic.metropolia.fi', address: 'https://tommi-server.jelastic.metropolia.fi' },
         development: { ssl: false, port: 3000, hostname: 'localhost', address: 'http://localhost:3000' },
       };
     
       const environment = process.env.NODE_ENV || 'production';
       const config = configurations[environment];

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
   
       await server.start();
       
       server.applyMiddleware({app});

       // Create the HTTPS or HTTP server, per configuration
      let httpServer;
      if (config.ssl) {
         // Assumes certificates are in a .ssl folder off of the package root.
         // Make sure these files are secured.
         httpServer = https.createServer(
            {
            key: fs.readFileSync('./certs/ssl-key.pem'),
            cert: fs.readFileSync('./certs/ssl-cert.pem')
            },

            app,
         );
      } else {
         httpServer = http.createServer(app);
      }
   
       db.on('connected', () => {
        httpServer.listen({port: config.port}, () =>
           console.log(
               `🚀 Server ready at ${config.address}${server.graphqlPath}`),
       );
      });
   } catch (e) {
      console.log('server error: ' + e.message);
   }
})();
