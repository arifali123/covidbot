import { MessageEmbed, MessageEmbedOptions } from "discord.js";

export class StandardEmbed extends MessageEmbed {
  constructor({ ...data }: MessageEmbedOptions) {
    super({ ...data, color: "#ED1B24", footer: { text: "Last Updated" } });
  }
}
