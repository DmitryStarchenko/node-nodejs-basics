import { Worker } from "worker_threads";
import { cpus } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const WORKER_PATH = join(dirname(fileURLToPath(import.meta.url)), "worker.js");

const performCalculations = async () => {
  const cpu = cpus().length;
  const workers = [];

  const workerPromises = Array.from({ length: cpu }, (_, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(WORKER_PATH);
      workers.push(worker);
      const number = 10 + i;
      worker.postMessage(number);

      worker.on("message", (result) => {
        resolve(result);
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  });

  const workerResults = await Promise.all(workerPromises);

  console.log(workerResults);

  workers.forEach((worker) => {
    worker.terminate();
  });
};

await performCalculations();
