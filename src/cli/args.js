const parseArgs = () => {
  const ARGS = process.argv.slice(2);
  let result = [];
  for (let i = 0; i < ARGS.length; i += 2) {
    const prop = ARGS[i];
    const value = ARGS[i + 1];

    if (prop && prop.startsWith("--") && value !== undefined) {
      const propName = prop.slice(2);
      result.push(`${propName} is ${value}`);
    }
  }
  if (result.length > 0) {
    console.log(result.join(", "));
  }
};

parseArgs();
