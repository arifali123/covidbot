import { CommandoClient } from "discord.js-commando";
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
client.login("Nzk0NDIzNTYxNjUyNTM1MzM4.X-6mmA.7IPR70GHZZugoEUNSGeslPlVBew");
