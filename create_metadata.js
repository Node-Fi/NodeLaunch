const { join, extname, basename } = require("path");
const { readdirSync, renameSync, writeFileSync } = require("fs");

const path = "./metadata";

for (let i = 1; i <= 100; i++) {
  const metadata = {
    name: "Node Wallet",
    description: "Node Wallet Launch",
    image: `https://raw.githubusercontent.com/Node-Fi/NodeLaunch/main/images/${i}.png`,
  };
  writeFileSync(`${path}/${i}.json`, JSON.stringify(metadata));
}
