const https = require("https");
const fs = require("fs");
let data;

module.exports = function fetchingtxt (location) {
    try {
      data = fs.readFileSync(location, "utf-8");
      return data
    } catch (err) {
      console.log(err);
    }
}