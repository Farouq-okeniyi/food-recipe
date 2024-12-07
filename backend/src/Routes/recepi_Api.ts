import { URLSearchParams } from "url"
import dotenv from 'dotenv';
import { log } from "console";
dotenv.config();

//get the api key
const apiKey = process.env.API_KEY

//function to combine and invoke an api endpoint using the query parameters
export const searchParams =async (searchTerm:string, page:number)=>{
    if(!apiKey) throw new Error('Api key not found')
    //create a url object
    const url = new URL('https://api.spoonacular.com/recipes/complexSearch')
    //define query parameters to append with url
    const queryParams = {
        apiKey:apiKey,
        query: searchTerm,
        number: '10',
        offset: (page * 10).toString()

    }    

    //Convert the queryParams object into a URL-encoded query string and set the query string for the url object.
    url.search = new URLSearchParams(queryParams).toString()
    console.log(url.search)
    //try fetvhing data by provided endpoint and turning it to json
    try {
        const searchResponse = await fetch(url);
        const resultJson = await searchResponse.json()
        return resultJson
    } catch (error) {
        
    }
}   



    // "start": "nodemon --watch ./src --exec node --loader ts-node/esm ./src/server.ts",