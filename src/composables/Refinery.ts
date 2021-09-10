export type Salt = {
  name: string
  isOn: boolean
  rank: RefineryRank;
  type: 'COMBUSTION' | 'SYNTHESIS'
  baseCycleTime: 3600000 | 900000 // Time in Millisecond
  resource: { name: string, quantity: number }[]
}

export type RefineryRank = {
  rank: number
  costGrowth: number
  PowerGrowth: number
  saltCap: number
}

export const ranks: RefineryRank[] = [
  { rank: 1, costGrowth: 1, PowerGrowth: 1, saltCap: 50 },
  { rank: 2, costGrowth: 2, PowerGrowth: 2, saltCap: 200 },
  { rank: 3, costGrowth: 5, PowerGrowth: 4, saltCap: 800 },
  { rank: 4, costGrowth: 8, PowerGrowth: 6, saltCap: 3000 },
  { rank: 5, costGrowth: 11, PowerGrowth: 8, saltCap: 8000 },
  { rank: 6, costGrowth: 14, PowerGrowth: 10, saltCap: 14000 },
  { rank: 7, costGrowth: 18, PowerGrowth: 12, saltCap: 20000 },
  { rank: 8, costGrowth: 22, PowerGrowth: 14, saltCap: 30000 },
  { rank: 9, costGrowth: 27, PowerGrowth: 17, saltCap: 40000 },
  { rank: 10, costGrowth: 31, PowerGrowth: 19, saltCap: 50000 },
  { rank: 11, costGrowth: 36, PowerGrowth: 22, saltCap: 65000 },
  { rank: 12, costGrowth: 41, PowerGrowth: 25, saltCap: 80000 },
  { rank: 13, costGrowth: 46, PowerGrowth: 28, saltCap: 100000 },
  { rank: 14, costGrowth: 52, PowerGrowth: 30, saltCap: 200000 },
  { rank: 15, costGrowth: 58, PowerGrowth: 33, saltCap: 300000 },
  { rank: 16, costGrowth: 64, PowerGrowth: 36, saltCap: 400000 },
  { rank: 17, costGrowth: 70, PowerGrowth: 39, saltCap: 500000 },
  { rank: 18, costGrowth: 76, PowerGrowth: 42, saltCap: 600000 },
  { rank: 19, costGrowth: 82, PowerGrowth: 45, saltCap: 700000 },
  { rank: 20, costGrowth: 89, PowerGrowth: 49, saltCap: 800000 },
];

export const salts: Salt[] = [
  {
    name: 'Redox Salts',
    rank: { ...ranks[0] },
    isOn: true,
    type: 'COMBUSTION',
    baseCycleTime: 900000,
    resource: [
      { name: 'Spore Cap', quantity: 10 },
      { name: 'Copper Ore', quantity: 5 },
    ]
  },
  {
    name: 'Explosive Salts',
    rank: { ...ranks[2] },
    isOn: true,
    type: 'COMBUSTION',
    baseCycleTime: 900000,
    resource: [
      { name: 'Bullfrog Horn', quantity: 10 },
      { name: 'Forest Fibres', quantity: 5 },
      { name: 'Redox Salts', quantity: 2 }
    ]
  },
  {
    name: 'Spontaneity Salts',
    rank: { ...ranks[0] },
    isOn: false,
    type: 'COMBUSTION',
    baseCycleTime: 900000,
    resource: [
      { name: 'Pocket Sand', quantity: 50 },
      { name: 'Goldfish', quantity: 30 },
      { name: 'Fly', quantity: 40 },
      { name: 'Explosive Salts', quantity: 3 }
    ]
  },
  {
    name: 'Dioxide Synthesis',
    rank: { ...ranks[0] },
    isOn: false,
    type: 'SYNTHESIS',
    baseCycleTime: 3600000,
    resource: [
      { name: 'Floof Ploof', quantity: 10 },
      { name: 'Dune Soul', quantity: 2 },
      { name: 'Scorpie', quantity: 1 },
      { name: 'Spontaneity Salts', quantity: 1 }
    ]
  },
  {
    name: 'Red Salt',
    rank: { ...ranks[0] },
    isOn: false,
    type: 'SYNTHESIS',
    baseCycleTime: 3600000,
    resource: [
      { name: 'Cracked Glass', quantity: 25 },
      { name: 'Bloach', quantity: 4 },
      { name: 'Sentient Cereal', quantity: 5 },
      { name: 'Mousey', quantity: 5 },
      { name: 'Dioxide Synthesis', quantity: 2 }
    ]
  }, {
    name: 'Red Salt 2',
    rank: { ...ranks[0] },
    isOn: false,
    type: 'SYNTHESIS',
    baseCycleTime: 3600000,
    resource: [
      { name: 'Contact Lense', quantity: 50 },
      { name: 'Void Bar', quantity: 5 },
      { name: 'Whispy Lumber', quantity: 5 },
      { name: 'Flycicle', quantity: 5 },
      { name: 'Frigid Soul', quantity: 5 },
      { name: 'Red Salt', quantity: 3 }
    ]
  }
];

