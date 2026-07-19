import dotenv from 'dotenv';
import path from 'path';
// Read environment name
export const testEnv = process.env.TEST_ENV || 'qa';

// Load matching .env file
dotenv.config({
    path: path.resolve(__dirname, `../.env.${testEnv}`)
});

// Export config object
export const Environment = {
    baseURL: process.env.BASE_URL ||'',
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',

    dbHost: process.env.DB_HOST!,
    dbPort: Number(process.env.DB_PORT!),
    dbName: process.env.DB_NAME!,
    dbUser: process.env.DB_USER!,
    dbPassword: process.env.DB_PASSWORD!
};