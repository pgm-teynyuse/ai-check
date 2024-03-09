const OpenAI = require("openai");

const openAiCheck = new OpenAI({
  apiKey: "API_KEY_HERE",
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Write your text here to check if is this text appropriate or respectful: ", function (inputText) {
  const prompt = `Is this text appropriate or respectful?\n${inputText}`;

  openAiCheck.completions
    .create({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      max_tokens: 50,
    })
    .then((response) => {
      console.log(response.choices[0].text.trim());
      rl.close();
    });
});
