import { Class } from "~/composables/Characters";

import { Build } from "~/composables/Builds";

export const build: Build = {
  title: "Wizard / AFK (~90)",
  notes: "100+ = Checkout books for these talents from the library.",
  version: "1.23",
  level: 90,
  tabs: [
    {
      skills: {
        "5": "100",
        "7": "*1",
        "8": "*2",
        "10": "100+",
        "12": "100+",
        "14": "100+",
      },
      comment:
        '*1 = Boost AGI to have as much accuracy as you need for the best AFK gains. Usually this will be the farthest monster you can reach without dying. If you\'re low on defense, by this point equipping food to stay alive is normal and expected.\n"Idle Casting" to 100 for 13% AFK gain rate.\nPriority switches to "Overclocked Energy" > "Gilded Sword" > "Sharpened Axe"\n*2 = Excess points into WIS for more damage and worship EXP. ',
    },
    {
      skills: {
        "1": "*1",
        "2": "100",
        "6": "*2",
        "8": "100+",
        "10": "*2",
      },
      comment:
        'Level "Power Overwhelming" to 100, then 100 "Mini Fireball".\n*1 = If you are not AFK damage capped, you can add more points into "Energy Bolt" until you hit cap.\n*2 = Spread excess points equally between "Knowledge is Power" and "Individual Insight".',
    },
    {
      skills: {
        "1": "60",
        "2": "60",
        "3": "60",
        "6": "50",
        "11": "*2",
        "15": "*1",
      },
      comment:
        'Level the damage skills evenly. Be sure to place 50 points into "Paperwork Great..." for a nice damage boost.\n*1 = You can put some points into "Earlier Education" if you\'re lacking points on Tab 2.\n *2 = If you have capped your damage, excess points can go into worship talents. This build does not prominently focus on worship, and so you are likely to only have enough talent points to level "Charge Syphon". It may be a good idea to add 1 point into "Charge Syphon" to make gathering souls easier. ',
    },
  ],
  class: Class.Wizard,
};
