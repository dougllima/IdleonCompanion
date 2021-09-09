export type Refinary = {
  name: string;
  resources: { name: string, baseValue: number };
  refinedSalt: { name: string, baseQnt: number };
  currentRank: Rank;
  type: RefinaryType;
}

export type Rank = {
  rank: number;
  costGrowth: number;
  PowerGrowth: number;
  saltCap: number;
}

export type RefinaryType = 'COMBUSTION' | 'SYNTHESIS'

export const Ranks: Record<number, Rank> = {
  1: { rank: 1, costGrowth: 1, PowerGrowth: 1, saltCap: 50 },
  2: { rank: 2, costGrowth: 2, PowerGrowth: 2, saltCap: 200 },
  3: { rank: 3, costGrowth: 5, PowerGrowth: 4, saltCap: 800 },
  4: { rank: 4, costGrowth: 8, PowerGrowth: 6, saltCap: 3000 },
  5: { rank: 5, costGrowth: 11, PowerGrowth: 8, saltCap: 8000 },
  6: { rank: 6, costGrowth: 14, PowerGrowth: 10, saltCap: 14000 },
  7: { rank: 7, costGrowth: 18, PowerGrowth: 12, saltCap: 20000 },
  8: { rank: 8, costGrowth: 22, PowerGrowth: 14, saltCap: 30000 },
  9: { rank: 9, costGrowth: 27, PowerGrowth: 17, saltCap: 40000 },
  10: { rank: 10, costGrowth: 31, PowerGrowth: 19, saltCap: 50000 },
  11: { rank: 11, costGrowth: 36, PowerGrowth: 22, saltCap: 65000 },
  12: { rank: 12, costGrowth: 41, PowerGrowth: 25, saltCap: 80000 },
  13: { rank: 13, costGrowth: 46, PowerGrowth: 28, saltCap: 100000 },
  14: { rank: 14, costGrowth: 52, PowerGrowth: 30, saltCap: 200000 },
  15: { rank: 15, costGrowth: 58, PowerGrowth: 33, saltCap: 300000 },
  16: { rank: 16, costGrowth: 64, PowerGrowth: 36, saltCap: 400000 },
  17: { rank: 17, costGrowth: 70, PowerGrowth: 39, saltCap: 500000 },
  18: { rank: 18, costGrowth: 76, PowerGrowth: 42, saltCap: 600000 },
  19: { rank: 19, costGrowth: 82, PowerGrowth: 45, saltCap: 700000 },
  20: { rank: 20, costGrowth: 89, PowerGrowth: 49, saltCap: 800000 },
};


// The formula to get cost multiplier by rank. 
// Won't use it cause can't find the formula for power and cap.
const getCostByRank = (rank: number) => Math.floor(rank * Math.sqrt(rank));