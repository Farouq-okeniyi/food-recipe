"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchParams = void 0;
const url_1 = require("url");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apikey = process.env.API_KEY;
console.log(apikey);
const searchParams = (searchterm, page) => __awaiter(void 0, void 0, void 0, function* () {
    if (!apikey)
        throw new Error('Api key not found');
    const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
    const queryParams = {
        apikey,
        query: searchterm,
        number: '10',
        offset: (page * 10).toString()
    };
    console.log(queryParams);
    url.search = new url_1.URLSearchParams(queryParams).toString();
    try {
        const searchResponse = yield fetch(url);
        const resultJson = yield searchResponse.json();
        return resultJson;
    }
    catch (error) {
    }
});
exports.searchParams = searchParams;
// "start": "nodemon --watch ./src --exec node --loader ts-node/esm ./src/server.ts",
