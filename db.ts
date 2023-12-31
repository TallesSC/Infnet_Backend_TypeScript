import { Sequelize } from 'sequelize';

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) as number,
    dialect: 'mysql',
    define: {
      freezeTableName: true,
    },
  },
);

export { sequelize };