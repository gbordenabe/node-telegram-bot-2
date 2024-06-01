import dotenv from 'dotenv';
dotenv.config();
import { botService } from './services/bot';
import express from 'express';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

/* (async () => {
  main();
})();
 */
/* function main() { */

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  botService();
});

/* } */
