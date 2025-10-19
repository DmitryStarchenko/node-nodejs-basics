import fs from "fs";

const PATH = "src/fs/files/fresh.txt";
const DATA = "I am fresh and young";

const create = async () => {
  fs.readFile(PATH, (error) => {
    if (error) {
      fs.writeFile(PATH, DATA, () => {});
      console.log("create file");
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
