import fs from "fs";

const FILE_PATH = "src/streams/files/fileToRead.txt";

const read = async () => {
  const stream = fs.createReadStream(FILE_PATH);

  stream.pipe(process.stdout);

  stream.on("end", () => {
    console.log("\n");
  });
};

await read();
