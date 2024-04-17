import axios from "axios";

export const getAggregators = async () => {
  try {
    const url = "https://config.orakl.network/baobab_aggregators.json";
    return (await axios.get(url)).data.result;
  } catch (ex) {
    console.error(ex);
  }
};
