# Covid-19 Tracking Discord Bot

## [Tutorial on how I made it](https://www.youtube.com/playlist?list=PLqakloaWqzLMN7tfxiJmrnEA9uTupPSU_)

## How To Use

1. Clone this repo and install dependencies `npm install`
1. Create .env file or open Environment Variables
1. Make a `BOT_TOKEN` key and set your token as the value
1. Make a `BOT_OWNER` key and set your user id as the value
1. Make a `BOT_PREFIX` key and set your prefix as the value
1. `npm start`

## Commands

1. !global
   - [Video Where I made Command](https://www.youtube.com/watch?v=0O6HeWPfOXU)
   - Gets Global Date On Covid-19
   - ![Picture Of Command](https://cdn.discordapp.com/attachments/794775790524432407/796604241547755520/unknown.png)
2. !state (US state)
   - [Video Where I made Command](https://www.youtube.com/watch?v=s_GVVq9IfcA)
   - Provide a valid US state as the first argument
   - Gets Data for each state
   - ![State Command](https://cdn.discordapp.com/attachments/794775790524432407/796604269959708682/unknown.png)
3. !states (metric)
   - [Video Where I made Command](https://youtu.be/GYbSCYTdjLY)
   - Provide metric to sort by(list below)
   - Gets data for all states and sorts by metric specified (greatest->least)
   - ![States Command](https://cdn.discordapp.com/attachments/794775790524432407/796604162913075200/unknown.png)

### Valid Arguments

1. Valid Metrics For Command 3
   ````ts
   const metrics: string[]=["cases","deaths","active","recovered","tests","population"]```
   ````
2. Valid Metrics For Command 2
   ```ts
   export const states: string[] = [
     "California",
     "Texas",
     "Florida",
     "New York",
     "Illinois",
     "Ohio",
     "Georgia",
     "Pennsylvania",
     "Tennessee",
     "North Carolina",
     "Arizona",
     "Michigan",
     "Indiana",
     "New Jersey",
     "Wisconsin",
     "Missouri",
     "Minnesota",
     "Massachusetts",
     "Alabama",
     "Virginia",
     "Colorado",
     "Louisiana",
     "South Carolina",
     "Oklahoma",
     "Iowa",
     "Maryland",
     "Utah",
     "Kentucky",
     "Washington",
     "Arkansas",
     "Kansas",
     "Nevada",
     "Mississippi",
     "Connecticut",
     "Nebraska",
     "New Mexico",
     "Idaho",
     "Oregon",
     "South Dakota",
     "North Dakota",
     "West Virginia",
     "Rhode Island",
     "Montana",
     "Delaware",
     "Alaska",
     "New Hampshire",
     "Wyoming",
     "District Of Columbia",
     "Maine",
     "Hawaii",
     "Vermont",
     "Puerto Rico",
     "Guam",
     "United States Virgin Islands",
     "Northern Mariana Islands",
     "American Samoa",
     "US Military",
     "Veteran Affairs",
     "Federal Prisons",
     "Navajo Nation",
     "Grand Princess Ship",
     "Wuhan Repatriated",
     "Diamond Princess Ship",
   ];
   ```

### Thanks For Checking this out and open a PR if you would like the contribute
