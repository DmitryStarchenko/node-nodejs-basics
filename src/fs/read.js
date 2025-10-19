import fs from "fs";

const FILE_PATH = "src/fs/files/fileToRead.txt";

const read = async () => {
  fs.readFile(FILE_PATH, { encoding: "utf-8" }, (err, data) => {
    if (err) throw new Error("FS operation filed");
    console.log(data);
  });
};

await read();
