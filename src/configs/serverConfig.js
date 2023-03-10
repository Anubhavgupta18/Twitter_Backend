import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const secretKey = process.env.secretKey;
const AWS_REGION = process.env.AWS_REGION;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const BUCKET_NAME = process.env.BUCKET_NAME; 
export {
    PORT,
    MONGO_URL,
    secretKey,
    AWS_REGION,
    AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_KEY_ID,
    BUCKET_NAME
};