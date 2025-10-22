import fs from "fs";
import crypto from "crypto";

const calculateHash = async () => {
  const filename = "src/hash/files/fileToCalculateHashFor.txt";
  const fileStream = fs.createReadStream(filename);
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
