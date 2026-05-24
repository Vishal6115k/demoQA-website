import { Client } from 'pg';

export class DBHelper {

    static async executeQuery(query: string) {

        const client = new Client({
            user: 'postgres',
            host: 'localhost',
            database: 'demoQA',
            password: 'Surabhi@2021',
            port: 5432
        });

        await client.connect();

        const result = await client.query(query);

        await client.end();

        return result.rows;
    }

}