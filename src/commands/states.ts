import { capitalizeFirstLetter, GetNationalData } from "../constants/functions";
import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import { StandardEmbed } from "../constants/classes";
import { FD, GenMD } from "field-descriptions/lib";
import { FDefaults } from "../constants/variables";
import { sample } from "lodash";
import { stringify } from "query-string";
const metrics: string[] = [
  "cases",
  "deaths",
  "active",
  "recovered",
  "tests",
  "population",
];
export default class StateCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      description: "Get All State data by a specific metric",
      group: "covidbot",
      memberName: "states",
      name: "states",
      argsCount: 1,
      args: [
        {
          key: "metric",
          prompt: "What metric do you want to filter by",
          type: "string",
          validate: (metric: string) => {
            return metrics.includes(metric)
              ? true
              : `Invalid Metric Filter By ${metrics.join(",")}`;
          },
        },
      ],
    });
  }
  async run(
    message: CommandoMessage,
    {
      metric,
    }: {
      metric:
        | "cases"
        | "deaths"
        | "active"
        | "recovered"
        | "tests"
        | "population";
    }
  ) {
    const data = await GetNationalData(metric);
    const info = data.map(({ state, ...info }) => {
      return { name: state, value: info[metric].toLocaleString() };
    });
    return message.embed(
      new StandardEmbed({
        title: "National Data",
        description: `${GenMD(`Sorted By ${capitalizeFirstLetter(metric)}:`, {
          bold: true,
          underline: true,
        })}\n${FD(info, FDefaults)}`,
        timestamp: sample(data)?.updated,
        url: `https://disease.sh/v3/covid-19/states?${stringify({
          sort: metric,
          yesterday: false,
          allowNull: false,
        })}`,
      })
    );
  }
}
