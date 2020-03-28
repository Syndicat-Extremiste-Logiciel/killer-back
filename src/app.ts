import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

app.set('trust proxy', 'loopback');

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


export default app;
