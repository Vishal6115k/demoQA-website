import * as XLSX from 'xlsx';

export class ExcelHelper {

    static readExcel(filePath: string, sheetName: string) {

        const workbook = XLSX.readFile(filePath);

        const sheet = workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found`);
        }

        const data = XLSX.utils.sheet_to_json(sheet);

        return data;
    }

}