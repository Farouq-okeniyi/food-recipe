import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
// import * as receipt from './recepi_Api.ts'
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.get('/api/recipts/search', async (req, res) => {
    // res.json({message:'succesful'})
    // const result = receipt.searchParams("hello", 3)
});
console.log('hello world');
export default app;
