import fs from "fs";

const FILE_PATH = "src/fs/files/fileToRemove.txt";

const remove = async () => {
  fs.unlink(FILE_PATH, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
