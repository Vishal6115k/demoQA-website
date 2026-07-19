import { Client } from 'pg';
import { Environment } from '../config/env';
export class DBHelper {

    static async executeQuery(query: string) {

        const client = new Client({
             user: Environment.dbUser,
             host: Environment.dbHost,
             database: Environment.dbName,
             password: Environment.dbPassword,
             port: Environment.dbPort
        });

        await client.connect();

        const result = await client.query(query);

        await client.end();

        return result.rows;
    }

}