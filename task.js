function process (input) {

  // Reduce over input to process an object where the key is the location and the value is the products
  const tree = input
  .reduce((output, o) => {
    o.locations.forEach(location => {
      if (output[location] === undefined) {
        output[location] = [];
      }

      output[location].push(o.name);
    });

    return output;
  }, {});

  // Format the tree into an array of objects
  const output = [];

  for(const location in tree) {
    if (tree.hasOwnProperty(location)) {
      output.push({ location, names: tree[location] });
    }
  }

  return output;
};

module.exports = process;
