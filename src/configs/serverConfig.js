import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const secretKey = process.env.secretKey;
export {
    PORT,
    MONGO_URL,
    secretKey
};