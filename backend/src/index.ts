import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as receipt from './Routes/recepi_Api.ts'
import { log } from 'console';

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/api/recipts/search', async(req,res:any)=>{
        const searchTerm = req.query.searchTerms as string;
        const pageNumber = parseInt(req.query.page as string)
        console.log(searchTerm, pageNumber);
        
        const result = await receipt.searchParams(searchTerm, pageNumber)

        return res.status(200).json({
                result
        })
});
export default app;
// ?searchTerm=burgers&page=1