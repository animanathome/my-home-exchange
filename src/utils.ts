import {promises as fs} from "fs";

export const getLocalData = async(dataFile: string) => {
    const absDataFile = process.cwd() + dataFile;
    const file = await fs.readFile(absDataFile, 'utf8');
    return JSON.parse(file);
}