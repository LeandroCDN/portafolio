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
  { value: null, label: "years writing Solidity" }, // TODO: e.g. "4+"
  { value: null, label: "products shipped to mainnet" }, // TODO
];

export const projects = [
  {
    name: "wildcardgames.app",
    url: "https://wildcardgames.app",
    featured: true,
    live: true,
    tags: ["Base", "Robinhood Chain"],
    description:
      "A fully on-chain gambling platform. Every bet, outcome and payout settles in contracts — no off-chain house.",
    role: "Founder · Smart contracts · Infra",
  },
  {
    name: "BirdGames",
    url: null, // TODO
    featured: true,
    live: true,
    tags: ["World Chain", "iGaming"],
    description:
      "A suite of on-chain casino games — Crash, Flip, RPS, Wheel, King, The Box. Wrote and audited every contract and led delivery end to end.",
    role: "Lead · Contracts · Audit",
    showVolume: true,
  },
  {
    name: "Liquidity rewards bot",
    url: null,
    tags: ["Polymarket", "Bot"],
    description:
      "Automated market-making for Polymarket liquidity rewards, with a share and liquidity estimator.",
    role: "Builder · Trading infra",
  },
  {
    name: "RushPoppy",
    url: null, // TODO
    tags: ["AI agents", "Hackathon"],
    description: "Collaborative-agent project built for the Flower Labs hackathon at Stanford.",
    role: "Builder · Pitch",
  },
  {
    name: "WhatTheHook",
    url: null, // TODO
    tags: ["Uniswap v4", "DeFi"],
    description: "Research and development on Uniswap v4 hooks.",
    role: "R&D · Solidity",
  },
  {
    name: "Nightz",
    url: "https://nightz.co/",
    tags: ["2023 – 2024", "NFT memberships"],
    description:
      "NFT memberships where each token is a night's stay. Built the team, the contracts and the multi-chain migration.",
    role: "CTO · Smart contracts",
  },
];

export const experience = [
  {
    company: "Independent",
    url: null,
    period: null, // TODO: "2022 — now"
    description:
      "Freelance smart contract development and private audits for lending, gambling, NFT and token projects. Lately also LLM agents and automation for businesses: WhatsApp sales agents, payment-receipt verification, ops automation.",
  },
  {
    company: "Comadran Studios",
    url: null,
    period: null, // TODO
    description:
      "Hired to audit; found and fixed critical vulnerabilities in production. Then built every contract for their NFT game: marketplace, token, staking and locking.",
  },
  {
    company: "Aurinext",
    url: "https://aurinext.com/",
    period: null, // TODO
    description:
      "Built Educaverse's custom token and pre-sale contract, plus the pre-sale front end in JavaScript and Web3.js.",
  },
];

export const stack = [
  { group: "contracts", items: ["Solidity", "Foundry", "Hardhat", "Uniswap v4", "Auditing"] },
  { group: "apps & infra", items: ["TypeScript", "Node", "ethers.js", "Next.js"] },
  { group: "agents", items: ["LLM agents", "WhatsApp automation", "Trading bots"] },
  { group: "chains", items: ["World Chain", "Base", "Robinhood Chain", "BNB Chain"] },
];
