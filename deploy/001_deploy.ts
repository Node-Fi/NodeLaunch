// import { DeployFunction } from "hardhat-deploy/types";

// const deployStorage: DeployFunction = async function ({
//   getNamedAccounts,
//   deployments,
//   getChainId,
//   getUnnamedAccounts,
// }) {
//   // await hre.run('compile');
//   const { deployer } = await getNamedAccounts();
//   const { deploy } = deployments;
//   await deploy("NodeLaunch", {
//     from: deployer,
//     args: [
//       "Node Launch Ticket",
//       "NLT",
//       "https://raw.githubusercontent.com/Node-Fi/NodeLaunch/main/metadata/",
//     ],
//     log: true,
//     // proxy: {
//     //   proxyContract: "OptimizedTransparentProxy",
//     // },
//   });
// };

// export default deployStorage;
// deployStorage.id = "deploy_storage";
// deployStorage.tags = ["Storage"];
