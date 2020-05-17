import express from 'express';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Hello word from api' });
    next();
})

export default app;
