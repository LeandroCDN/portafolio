// All site content lives here. Fields set to null are hidden on the page.

export const profile = {
  name: "Leandro Labiano",
  handle: "lean.labiano",
  location: "Argentina (UTC-3)",
  available: "open to freelance & remote roles", // set to null to hide the badge
  headline: "I build systems that run on-chain — and the agents that run them.",
  intro:
    "Smart contract developer and auditor. I ship fully on-chain games, DeFi tooling, trading bots and LLM agents — from contract to production.",
  email: null, // TODO: "you@domain.com"
  cv: "/files/LEANDRO-LABIANO.pdf",
  github: "https://github.com/LeandroCDN",
  x: "https://x.com/leanlabiano",
  linkedin: "https://www.linkedin.com/in/leanlabiano/",
  youtube: "https://www.youtube.com/@leanlabiano",
};

// Static stats. The BirdGames volume is read on-chain (src/lib/volume.js).
export const stats = [
  { value: "5+", label: "years writing Solidity (since 2021)" },
  { value: "100k+", label: "BirdGames users" },
];

export const projects = [
  {
    name: "wildcardgames.app",
    url: "https://wildcardgames.app",
    featured: true,
    badge: "CURRENT",
    tags: ["Base", "Robinhood Chain"],
    description:
      "What I'm building now. A fully on-chain gambling platform: every bet, outcome and payout settles in contracts — no off-chain house.",
    role: "Founder · Smart contracts · Infra",
  },
  {
    name: "BirdGames",
    url: null, // TODO
    featured: true,
    live: true,
    tags: ["World Chain", "iGaming"],
    description:
      "Co-founded and ran tech. On-chain casino games on World Chain's mini app store — Crash, Flip, RPS, Wheel, King, The Box. 100k+ users. Wrote and audited every contract and led delivery end to end.",
    role: "Co-Founder · CTO · Lead Dev",
    showVolume: true,
    explorer: "https://worldscan.org/address/",
    contracts: [
      { name: "Treasury", address: "0x0d11962468Ccc3d1A38a7179c978F0A34971Dc41" },
      { name: "GameRouter", address: "0x105c6e0778f9ca58496F5c94D369f1771776bEBa" },
      { name: "Wheel", address: "0x3cF7342bf3Ba9b813Afe899852Ab7302D3277F30" },
      { name: "Crash v3", address: "0xF5e968d554471816d50b593BD5fa7C6ddC4DEB58" },
      { name: "Crash v2", address: "0xD50CeCCe52a04Ef5259C89020dD4AEa23143e1Fa" },
      { name: "Crash v1", address: "0x36291184a593fe7E0A6af87e126A511E4a1fc284" },
      { name: "Flip", address: "0x6A84107E72d20E310598f5346abF7e92280CF672" },
      { name: "Rock Paper Scissors", address: "0x8d4A879ee2c368222F2ED20C2178cC73dA69B762" },
      { name: "King", address: "0x9841CdC07C3566367741E3a0c3A8FE9F36519dEe" },
      { name: "The Box", address: "0xE37d5D5777dAB5B8aA9a47f55672c3728e0f05eB" },
      { name: "Race", address: "0xF0B791DcA67a0bCeFc9AE3F1DE30225A0c808c74" },
      { name: "Meme Race", address: "0xaAC1FE8B6391E74f0DEd8336aD27DB903375C4FE" },
    ],
  },  {
    name: "BloodLoop",
    url: null, // TODO
    tags: ["Web3 game", "NFTs", "Marketplace"],
    description:
      "Biggest team I've worked in. Designed the game's on-chain economy — NFTs, skins, shop, auction house, refinement — then built the marketplace front end.",
    role: "Blockchain consultant · Full-stack Web3",
  },
  {
    name: "Nightz",
    url: "https://nightz.co/",
    tags: ["RWA", "NFT memberships", "2023 – 2024"],
    description:
      "Real-world asset memberships: each NFT is a night's stay in partner properties. Built the team, the contracts and the multi-chain migration.",
    role: "CTO · Smart contracts",
  },
];

// Smaller list under the main projects.
export const sideProjects = [
  { name: "Polymarket liquidity bot", description: "Market-making bot for Polymarket liquidity rewards, with a share and liquidity estimator.", url: null },
  { name: "WhatTheHook", description: "R&D on Uniswap v4 hooks.", url: null },
  { name: "RushPoppy", description: "Collaborative-agent project for the Flower Labs hackathon at Stanford.", url: null },
];

export const experience = [
  {
    company: "BirdGames",
    role: "Co-Founder, CTO & Lead Developer",
    url: null,
    period: "2025 — now",
    description:
      "Co-founded a blockchain gaming startup and ran all of tech. Shipped 4 games on World Chain's mini app store, frontend and contracts. 100k+ users and 2M+ in on-chain volume.",
  },
  {
    company: "BloodLoop",
    role: "Full Stack Engineer (Web3) · Blockchain Consultant & Solidity Dev",
    url: null,
    period: "2024 — 2025 · Italy, remote",
    description:
      "Designed the game's on-chain systems: NFTs, in-game skins, shop, auction house and a refinement system (Solidity, Hardhat, Scaffold-ETH, IPFS). Then built the Web3 marketplace front end — login, inventory, wallet and contract integration with Next.js, Tailwind, Thirdweb and ethers.js.",
  },
  {
    company: "CodeHawks (Cyfrin)",
    role: "Security Researcher",
    url: "https://profiles.cyfrin.io/u/leanlabiano",
    period: "2024",
    description:
      "First public audit competition: One World Project. Finished Top 5 among participating auditors.",
  },
  {
    company: "Nightz",
    role: "CTO",
    url: "https://nightz.co/",
    period: "2023 — 2024",
    description:
      "Built the team, led web development and wrote the contracts. Launched the product and migrated it across networks to the main chain.",
  },
  {
    company: "Comadran Studios",
    role: "Smart Contract Developer & Auditor",
    url: null,
    period: null, // TODO
    description:
      "Hired to audit; found and fixed critical vulnerabilities in production. Then built every contract for their NFT game: marketplace, token, staking and locking.",
  },
  {
    company: "Aurinext",
    role: "Solidity Developer",
    url: "https://aurinext.com/",
    period: null, // TODO
    description:
      "Built Educaverse's custom token and pre-sale contract, plus the pre-sale front end in JavaScript and Web3.js.",
  },
];

export const stack = [
  { group: "ecosystems", items: ["EVM", "Solana"] },
  { group: "contracts", items: ["Solidity", "Foundry", "Hardhat", "Uniswap v4", "Auditing"] },
  { group: "apps & infra", items: ["TypeScript", "Node", "Next.js", "ethers.js", "Thirdweb", "IPFS"] },
  { group: "agents", items: ["LLM agents", "WhatsApp automation", "Trading bots"] },
  { group: "chains", items: ["World Chain", "Base", "Robinhood Chain", "BNB Chain"] },
];
