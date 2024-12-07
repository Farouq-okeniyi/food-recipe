import { URLSearchParams } from "url";
const apikey = process.env.API_KEY;
export const searchParams = async (searchterm, page) => {
    if (!apikey)
        throw new Error('Api key not found');
    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
    const queryParams = {
        apikey,
        number: '10',
        query: searchterm,
        offset: (page * 10).toString()
    };
    url.search = new URLSearchParams(queryParams).toString();
    try {
        const searchResponse = await fetch(url);
        const resultJson = await searchResponse.json();
        return resultJson;
    }
    catch (error) {
    }
};
// "start": "nodemon --watch ./src --exec node --loader ts-node/esm ./src/server.ts",
