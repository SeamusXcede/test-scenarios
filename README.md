# test-scenarios

Easily run the same unit test with different test data.

Not tied to a specific library, it can be used with

- [mocha](https://mochajs.org/)
- [jasmine](https://jasmine.github.io/)
- [jest](https://facebook.github.io/jest/)
- any library where tests are defined within a function.

## Example

```js
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import scenarios from "test-scenarios";

describe("sum", () => {
  scenarios([
    { a: 1, b: 2, result: 3 },
    { a: -1, b: 1, result: 0 }
  ], ({ a, b, result }, scenarioIndex) => {
    describe(`When ${a} and ${b} are passed`, () => {
      it(`should return ${result}`, () => {
        expect(sum(a, b)).toEqual(result);
      });
    });
  });
});
```

## API

`scenarios(testScenarios, testsFn)`

- `testScenarios`: `any` contains the test data for every scenario.
- `testsFn`: `Function` the test function to run each time with different data, it can be a whole `describe` block or multiple `it`/`test` wrapped into a function. It will be invoked with:
  - `parameters`: `any` the data for the scenario
  - `index`: `number` the scenario index

### Note for Jest users

You can achieve the same result as the above by using the following syntax:

```js
describe.each([
  { a: 1, b: 2, result: 3 },
  { a: -1, b: 1, result: 0 }
])('sum', ({ a, b, result }) => {
  describe(`When ${a} and ${b} are passed`, () => {
    it(`should return ${result}`, () => {
      expect(sum(a, b)).toEqual(result);
    });
  });
});
```

More info on [describe.each](https://facebook.github.io/jest/docs/en/api.html#describeeachtable-name-fn) and [test.each](https://facebook.github.io/jest/docs/en/api.html#testeachtable-name-fn).
