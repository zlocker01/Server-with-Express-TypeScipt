import express from 'express';
import { router } from './users';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('listening..');
});

