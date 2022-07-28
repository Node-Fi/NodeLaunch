import { DeployFunction } from "hardhat-deploy/types";

const deployStorage: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  getChainId,
  getUnnamedAccounts,
}) {
  // await hre.run('compile');
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  await deploy("TestNFT", {
    from: deployer,
    args: [
      "Test",
      "TST",
      "https://raw.githubusercontent.com/Node-Fi/NodeLaunch/main/metadata/",
      "0x4DCd0efDbCc9EB429683FEea07B4131DC3290C45",
      100,
    ],
    log: true,
    // proxy: {
    //   proxyContract: "OptimizedTransparentProxy",
    // },
  });
};

export default deployStorage;
deployStorage.id = "deploy_test";
deployStorage.tags = ["Test"];
