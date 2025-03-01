const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API key not found!");
  process.exit(1);
}

console.log(`Using API key: ${apiKey}`);
// Ваш код для работы с API
