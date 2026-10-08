import { ethers } from "ethers";

// BirdGames treasury on World Chain. Every game (incl. the Wheel, via the GameRouter)
// deposits bets here, so total deposits per token = total wagered.
const RPC = "https://worldchain-mainnet.g.alchemy.com/public";
const CHAIN_ID = 480;
const TREASURY = "0x0d11962468Ccc3d1A38a7179c978F0A34971Dc41";
const TOKENS = [
  { symbol: "WLD", address: "0x2cFc85d8E48F8EAB294be644d9E25C3030863003", decimals: 18 },
  { symbol: "USDC", address: "0x79A02482A880bCE3F13e09Da970dC34db4CD24d1", decimals: 6 },
];

const compact = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

export async function getBirdGamesVolume() {
  try {
    const provider = new ethers.JsonRpcProvider(RPC, CHAIN_ID, { staticNetwork: true });
    const treasury = new ethers.Contract(
      TREASURY,
      ["function totalGlobalDepositsPerToken(address) view returns (uint256)"],
      provider
    );
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("RPC timeout")), 8000));
    const amounts = await Promise.race([
      Promise.all(TOKENS.map((t) => treasury.totalGlobalDepositsPerToken(t.address))),
      timeout,
    ]);
    return TOKENS.map((t, i) => ({
      symbol: t.symbol,
      value: compact.format(Number(ethers.formatUnits(amounts[i], t.decimals))),
    })).filter((v) => v.value !== "0");
  } catch (err) {
    console.error("BirdGames volume:", err.message);
    return null; // page hides the stat
  }
}
