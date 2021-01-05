import { CommandoClient } from "discord.js-commando";
require("dotenv").config();
import { join } from "path";
const client = new CommandoClient({
  owner: "699751428222353489",
  commandPrefix: "!",
});
client.registry
  .registerDefaults()
  .registerGroups([["covidbot"]])
  .registerCommandsIn({
    filter: /^([^.].*)\.(js|ts)$/,
    dirname: join(__dirname, "commands"),
  });

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});
client.login(process.env.BOT_TOKEN);
