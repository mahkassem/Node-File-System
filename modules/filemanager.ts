import fs from 'fs';

export const createFile = (fileName: string, content: string): void => {
    fs.writeFileSync(fileName, content);
    console.log(`File ${fileName} created`);
};

export const loadFile = (fileName: string): string => {
    return fs.readFileSync(fileName, 'utf8');
};

export const deleteFile = (fileName: string): void => {
    fs.unlinkSync(fileName);
    console.log(`File ${fileName} deleted`);
};