import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import route from './routes/onePassword.js';
import setupSwagger from './swagger.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/v1', route);

setupSwagger(app);

app.get('/', (_, res) => {
  res.send('The One Password Manager API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});