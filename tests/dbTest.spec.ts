import { test } from '@playwright/test';
import { DBHelper } from '../utils/dbHelper';

test.skip('Fetch data from PostgreSQL', async () => {

    const result = await DBHelper.executeQuery(
        'SELECT * FROM "TextBox"'
    );

    console.log(result);

});