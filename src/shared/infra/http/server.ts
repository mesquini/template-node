import 'dotenv/config';
import log4js from 'log4js';

// import MongoDB from '../database/MongoDB';
import App from './App';

log4js.configure({
  appenders: { out: { type: 'stdout' } },
  categories: {
    default: { appenders: ['out'], level: process.env.LOG_LEVEL || 'info' },
  },
});

// const mongoConnection = new MongoDB();
const app = new App();

app.startApp(process.env.API_PORT || '3333');
