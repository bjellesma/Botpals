import openai from "./config/open-ai.js";
import env from "./config/env-vars.js";
import readlineSync from "readline-sync";
import colors from "colors";

function getBillResponse(userInput) {
  const replies = ["Who's asking?", "What's it to you?", "Beats me"];
  return replies[Math.floor(Math.random() * 3)];
}

async function getOpenAiResponse(chatHistory, userInput) {
  const messages = [];
  if (env.isChatHistorySaved) {
    // construct messages by iterating history
    chatHistory.map(([role, content]) => ({
      role,
      content,
    }));
  }
  //   add latest user input
  messages.push({ role: "user", content: userInput });
  //   send chat to openai with full message history
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: messages,
  });

  const assistantText = chatCompletion.choices[0].message.content;
  if (env.isChatHistorySaved) {
    //   update chat history
    chatHistory.push(["user", userInput]);
    chatHistory.push(["assistant", assistantText]);
  }
  return assistantText;
}

async function main() {
  // need array outside while loop to hold messages
  const chatHistory = [];
  // readlineSync will get input from the command line
  console.log(colors.bold.yellow("Welcome to Botpals (type exit to exit)"));
  if (env.isOpenAiUsed) {
    console.log(
      colors.bold.yellow(
        `You are chatting with chatgpt${
          env.isChatHistorySaved ? " (History Saved)" : ""
        }`
      )
    );
  }
  while (true) {
    const userInput = readlineSync.question(
      colors.blue("What is your question? ")
    );
    try {
      // if using chatgpt, we await a response, else we use hello world
      let message = env.isOpenAiUsed
        ? await getOpenAiResponse(chatHistory, userInput)
        : getBillResponse(userInput);
      console.log(colors.green(message));
      // if user exits
      if (userInput.toLocaleLowerCase() === "exit") {
        console.log(colors.red("Bye Now"));
        return;
      }
    } catch (error) {
      console.log(colors.red(error));
    }
  }
}

main();
