const fs = require("fs");
const path = require("path");
const savepath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callbackFn) => {
  fs.readFile(savepath, (err, fileContent) => {
    if (err) {
      // we're returning an array, even if it's empty, because that's what fetchAll expects
      callbackFn([]);
    } else {
      callbackFn(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  // we chose the name of this method
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(savepath, JSON.stringify(products), (err) => {
        if (err !== null) {
          console.log(err);
        }
      });
    });
  }

  // static allows us to call this method on the class itself, and not on the instantiated object
  static fetchAll(callbackFn) {
    getProductsFromFile(callbackFn);
  }
};
