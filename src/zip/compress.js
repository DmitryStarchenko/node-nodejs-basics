import { createGzip } from "zlib";
import fs from "fs";

const FILE_PATH = "src/zip/files/fileToCompress.txt";
const ZIP_FILE_PATH = "src/zip/files/archive.gz";

const compress = async () => {
  const gzip = createGzip();
  const source = fs.createReadStream(FILE_PATH);
  const destination = fs.createWriteStream(ZIP_FILE_PATH);

  source.pipe(gzip).pipe(destination);
};

await compress();
