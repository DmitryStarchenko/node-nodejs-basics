import fs from "fs";

const FILE_PATH = "src/streams/files/fileToWrite.txt";

const write = async () => {
  console.log("To save, enter 'save'");
  console.log("Enter data:");

  const stream = fs.createWriteStream(FILE_PATH, { flags: "a" });

  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (data) => {
    const save = data.trim();
    if (save === "save") process.exit(0);
    stream.write(data);
  });

  process.stdin.on("end", () => {
    stream.end();
  });
};

await write();
