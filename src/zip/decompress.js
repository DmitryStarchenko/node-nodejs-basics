import { createGunzip } from "zlib";
import fs from "fs";

const FILE_PATH = "src/zip/files/fileToCompress.txt";
const ZIP_FILE_PATH = "src/zip/files/archive.gz";

const decompress = async () => {
  const gzip = createGunzip();
  const source = fs.createReadStream(ZIP_FILE_PATH);
  const destination = fs.createWriteStream(FILE_PATH);

  source.pipe(gzip).pipe(destination);
};

await decompress();
