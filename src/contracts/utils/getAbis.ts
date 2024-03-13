import BnbUsdt from "../abis/0x731A5AFB6e021579138Ea469B25C2ab46ff44199.json";
import BTCUSDT from "../abis/0xE747418f2fe0F5794c5105f718b59b283E1B5e07.json";
import BUSDUSDT from "../abis/0xc820F6E9ab1A9321d22720A0986088A9298563ed.json";
import DAIUSDT from "../abis/0x219BAD3A896964A2B28Ef4dE6Ae6E6D72B646745.json";
import DOTUSDT from "../abis/0x2b062807C6B3F8Ca5C366545d50aA19c114E9d7b.json";
import ETHUSDT from "../abis/0xf1AF997ffA9b43CcA41078d74C3F897DB998e9bd.json";
import KLAYUSDT from "../abis/0xf0d6Ccdd18B8A7108b901af872021109C27095bA.json";
import MATICUSDT from "../abis/0x7970d00F24e65F1BC757896e32Db820A8e9260F0.json";
import MNRKRW from "../abis/0x22ddDb9749cB5941DdEc5fD50B12CfDdB8E259c9.json";

export const getAbiByAddress = (address: string) => {
  switch (address) {
    case "0x731A5AFB6e021579138Ea469B25C2ab46ff44199":
      return BnbUsdt.abi;
    case "0xE747418f2fe0F5794c5105f718b59b283E1B5e07":
      return BTCUSDT.abi;
    case "0xc820F6E9ab1A9321d22720A0986088A9298563ed":
      return BUSDUSDT.abi;
    case "0x219BAD3A896964A2B28Ef4dE6Ae6E6D72B646745":
      return DAIUSDT.abi;
    case "0x2b062807C6B3F8Ca5C366545d50aA19c114E9d7b":
      return DOTUSDT.abi;
    case "0xf1AF997ffA9b43CcA41078d74C3F897DB998e9bd":
      return ETHUSDT.abi;
    case "0xf0d6Ccdd18B8A7108b901af872021109C27095bA":
      return KLAYUSDT.abi;
    case "0x7970d00F24e65F1BC757896e32Db820A8e9260F0":
      return MATICUSDT.abi;
    case "0x22ddDb9749cB5941DdEc5fD50B12CfDdB8E259c9":
      return MNRKRW.abi;
    default:
      return BnbUsdt.abi;
  }
};
