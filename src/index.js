import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(express.json());
server.use(cors());



const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Api subiu na porta ${PORT}`));
