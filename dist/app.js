"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bot_1 = require("./services/bot");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
/* (async () => {
  main();
})();
 */
/* function main() { */
app.use(express_1.default.static('public'));
app.get('/', (req, res) => res.send('Express on Vercel'));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    (0, bot_1.botService)();
});
/* } */
