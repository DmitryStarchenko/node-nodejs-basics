import fs from "fs";
import crypto from "crypto";

const FILE_PATH = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const fileStream = fs.createReadStream(FILE_PATH);
  const hash = crypto.createHash("sha256");

  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(`File hash: ${fileHash}`);
  });
};

await calculateHash();
