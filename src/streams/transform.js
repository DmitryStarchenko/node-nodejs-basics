import { Transform } from "stream";

const transform = async () => {
  const upper = new Transform({
    transform(data, encoding, callback) {
      const text = data.toString().split("").reverse().join("");
      this.push(text);
      callback();
    },
  });

  process.stdin.pipe(upper).pipe(process.stdout);
};

await transform();
