import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import { FD, GenMD } from "field-descriptions/lib";
import { FDefaults } from "../constants/variables";
import { StandardEmbed } from "../constants/classes";
import { GetGlobalData } from "../constants/functions";
export default class GlobalCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      description: "Gets Global Data",
      group: "covidbot",
      memberName: "global",
      name: "global",
    });
  }
  async run(message: CommandoMessage) {
    const data = await GetGlobalData();
    const {
      cases,
      deaths,
      recovered,
      tests,
      todayCases,
      todayDeaths,
      todayRecovered,
      updated,
    } = data;
    return message.embed(
      new StandardEmbed({
        title: "Global Data For Today",
        color: "#ED1B24",
        description: `${GenMD("Totals:", {
          bold: true,
          underline: true,
        })}\n${FD(
          [
            { name: "Total Cases", value: cases.toLocaleString() },
            { name: "Total Deaths", value: deaths.toLocaleString() },
            { name: "Total Recoveries", value: recovered.toLocaleString() },
            { name: "Total Tests Administered", value: tests.toLocaleString() },
          ],
          FDefaults
        )}\n${GenMD("Daily Changes:", { bold: true, underline: true })}\n${FD(
          [
            { name: "New Cases Today", value: todayCases.toLocaleString() },
            { name: "New Deaths Today", value: todayDeaths.toLocaleString() },
            {
              name: "New Recoveries Today",
              value: todayRecovered.toLocaleString(),
            },
          ],
          FDefaults
        )}`,
        url:
          "https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=false",
        timestamp: updated,
        footer: { text: "Last Updated" },
      })
    );
  }
}
