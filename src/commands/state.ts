import axios from "axios";
import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import { stringify } from "query-string";
import { escape } from "querystring";
import { states, FDefaults } from "../constants/variables";
import { StateData } from "../constants/types";
import { FD, GenMD } from "field-descriptions/lib";
import { StandardEmbed } from "../constants/classes";
export default class StateCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      description: "Get Data for specific state",
      group: "covidbot",
      memberName: "state",
      name: "state",
      argsCount: 1,
      args: [
        {
          key: "state",
          prompt: "What State Do You Want The Data For",
          type: "string",
          validate: (state: string) => {
            return states
              .map((state) => {
                return state.toLowerCase();
              })
              .includes(state)
              ? true
              : `Invalid state, Valid states are ${states.join(",")}`;
          },
        },
      ],
    });
  }
  async run(message: CommandoMessage, { state }: { state: string }) {
    const { data }: { data: StateData } = await axios.get(
      `https://disease.sh/v3/covid-19/states/${state}?${stringify({
        yesterday: false,
        allowNull: false,
      })}`
    );
    const {
      state: state2,
      cases,
      deaths,
      recovered,
      tests,
      updated,
      active,
    } = data;
    return message.embed(
      new StandardEmbed({
        title: `Data for ${state2}`,
        url: `https://disease.sh/v3/covid-19/states/${escape(
          state
        )}?${stringify({
          yesterday: false,
          allowNull: false,
        })}`,
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
          [{ name: "Active Cases Today", value: active.toLocaleString() }],
          FDefaults
        )}`,
        timestamp: updated,
      })
    );
  }
}
