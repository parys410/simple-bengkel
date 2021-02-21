const Config = require("../model/config-model");

const getConfig = async (event, arg) => {
  const response = await Config.find();
  console.log(response);

  if (!response || response.length <= 0) {
    return {
      success: false,
      config: null
    };
  }

  return {
    success: true,
    config: {
      storeName: response[0].storeName,
      cashier: response[0].cashier
    }
  };
};

module.exports = {
  getConfig
};
