const fs = require("fs");
const csv = require("csv-parser");

const solving = () => {
  return new Promise((resolve) => {
    fs
      .createReadStream("cities.csv")
      .pipe(csv())
      .on("data", function(data) {
        try {
          populatron(data);
        } catch (err) {
          return err;
        }
      })
      .on("end", () => {
        resolve(result);
      });
  });
};

let result = 0;
async function populatron(data) {
  result += parseInt(data.population);
}

module.exports = {
  totalPopulation(onFinished) {
    solving().then((final) => onFinished(final));
  },
};
