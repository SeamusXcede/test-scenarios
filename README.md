# test-scenarios

Create multiple scenarios to run your tests against.

## Example

```js
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import scenarios from "test-scenarios";

describe("sum", () => {
  scenarios(
    [{ a: 1, b: 2, result: 3 }, { a: -1, b: 1, result: 0 }],
    ({ a, b, result }, testIndex) => {
      describe(`When ${a} and ${b} are passed`, () => {
        it(`should return ${result}`, () => {
          expect(sum(a, b)).toEqual(result);
        });
      });
    }
  );
});
```
