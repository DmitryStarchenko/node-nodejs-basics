import fs from "fs";

const FOLDER_PATH = "src/fs/files";

const list = async () => {
  fs.readdir(FOLDER_PATH, (err, files) => {
    if (err) throw new Error("FS operation filed");
    console.log(files);
  });
};

await list();
