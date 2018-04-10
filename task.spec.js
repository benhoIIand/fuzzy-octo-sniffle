const process = require('./task');

describe('Converting an array of products and their locations', () => {

  test('returns an array of location objects', () => {
    const input = [
      { name: 'Product 1', locations: ['Paris', 'France', 'Europe'] },
      { name: 'Product 2', locations: ['Bordeux', 'France', 'Europe'] },
      { name: 'Product 3', locations: ['Edinburgh', 'Scotland', 'Europe'] },
    ];

        // Output
    const expectedOutput = [
      {
        location: 'Paris',
        names: ['Product 1'],
      },
      {
        location: 'France',
        names: ['Product 1', 'Product 2'],
      },
      {
        location: 'Europe',
        names: ['Product 1', 'Product 2', 'Product 3'],
      },
      {
        location: 'Bordeux',
        names: ['Product 2'],
      },
      {
        location: 'Edinburgh',
        names: ['Product 3'],
      },
      {
        location: 'Scotland',
        names: ['Product 3'],
      },
    ];

    expect(process(input)).toEqual(expectedOutput);
  });
});
