const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require("dotenv");

dotenv.config();

client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (msg) => {
  if (!msg.isChatInputCommand()) return;
  if (msg.commandName === "ping") {
    await msg.reply("pong");
  }
});

client.login(process.env.TOKEN);
