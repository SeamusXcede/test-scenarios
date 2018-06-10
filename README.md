# test-scenarios

Create multiple scenarios to run your tests against.

## Example

```js
import scenarios from "test-scenarios";

const sum = (a, b) => a + b;

describe("sum", () => {
  scenarios([
    { a: 1, b: 2, result: 3 },
    { a: -1, b: 1, result: 0 }
  ], ({ a, b, result }) => {
    describe(`When ${a} and ${b} are passed`, () => {
      it(`should return ${result}`, () => {
        expect(sum(a, b)).toEqual(result);
      });
    });
  });
```
