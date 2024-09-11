import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const OnChainNFTModule = buildModule("onChainNFTModule", (m) => {


  const onchainNFT = m.contract("OnChainNFT");

  return { onchainNFT };
});

export default OnChainNFTModule;
