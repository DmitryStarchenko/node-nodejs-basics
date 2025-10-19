const parseEnv = () => {
  const ENV = process.env;
  const rssVars = Object.entries(ENV).filter(([key]) => key.startsWith("RSS_"));

  const result = rssVars.map(([key, value]) => `${key}=${value}`).join("; ");
  console.log(result);
};

parseEnv();
