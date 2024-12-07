"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('api/recipts/search', async (req, res) => {
    res.json({ message: 'succesful' });
});
app.listen(5000, () => console.log('server is running'));
// "build": "tsc",
//   "start": "nodemon ./dist/index.js"
// "scripts": {
//   "start": "nodemon --watch ./src --exec node --loader ts-node/esm ./src/index.ts"
//   },
