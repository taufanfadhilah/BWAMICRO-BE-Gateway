const { default: Axios } = require("axios");
const axios = require("axios");
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
  return axios.create({
    baseUrl,
    timeout: TIMEOUT,
  });
};