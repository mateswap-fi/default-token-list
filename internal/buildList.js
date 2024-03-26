const { version } = require("../package.json");

const lachain = require("../tokens/lachain.json");
const lachainTestnet = require("../tokens/lachain-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "MateSwap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/mateswap-fi/art/master/mate/logo-256x256.png",
    keywords: ["mateswap", "default"],
    tokens: [
      ...lachain,
      ...lachainTestnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
