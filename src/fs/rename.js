import fs from "fs";

const CURRENT_PATH = "src/fs/files/wrongFilename.txt";
const NEW_PATH = "src/fs/files/properFilename.md";

const rename = async () => {
  fs.access(NEW_PATH, fs.constants.F_OK, (err) => {
    if (err) {
      fs.rename(CURRENT_PATH, NEW_PATH, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
