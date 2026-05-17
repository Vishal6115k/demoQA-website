import dotenv from 'dotenv';

// Read environment name
const testEnv = process.env.TEST_ENV || 'qa';

// Load matching .env file
dotenv.config({
    path: `.env.${testEnv}`
});

// Export config object
export const config = {
    baseURL: process.env.BASE_URL || '',
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || ''
};