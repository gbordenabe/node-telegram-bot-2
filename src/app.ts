import dotenv from 'dotenv';
dotenv.config();
import { botService } from './services/bot';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

/* (async () => {
  main();
})();
 */
/* function main() { */

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  botService();
});

/* } */
