import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express';
import { sequelize } from './db';
import * as AdminJSSequelize from '@adminjs/sequelize';
import { generateResource } from './utils/modelingModel';
import { Actor, Movie } from './models';

require('dotenv').config();

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const PORT = 3000;
const start = async () => {
  const app = express();

  sequelize.sync().then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });

  const admin = new AdminJS({
    resources: [
      generateResource(Actor),
      generateResource(Movie),
    ],
    rootPath: '/admin',
    branding: {
      companyName: 'IMDB',
    }
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
  });
};

start();
