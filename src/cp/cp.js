import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SCRIPT_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "files/script.js"
);

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [SCRIPT_PATH, ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  return childProcess;
};

spawnChildProcess(["arg1", "arg2", "arg3", "arg4"]);
