import { createFile, loadFile, deleteFile } from "./modules/filemanager";

const fileName = "./files/test.txt";
const content = "Hello World!";

// Create a text file
createFile(fileName, content);

const file = loadFile(fileName);

// log file content
console.log(file);

// Delete the file
deleteFile(fileName);