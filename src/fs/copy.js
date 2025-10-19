import fs from "fs";

const CURRENT_PATH = "src/fs/files";
const COPY_PATH = "src/fs/files-copy";

const copy = async () => {
  fs.access(COPY_PATH, fs.constants.F_OK, (err) => {
    if (err) {
      fs.cp(CURRENT_PATH, COPY_PATH, { recursive: true }, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await copy();
