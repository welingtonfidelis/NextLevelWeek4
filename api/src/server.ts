import 'reflect-metadata';
import express from 'express';
import './database';
import { router } from './routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`🚀 Running in ${port}`);
});
