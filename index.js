const isFunction = value => typeof value === "function";

const scenarios = (testScenarios, testsFn) => {
  if (!testScenarios) return;
  if (!testsFn) {
    throw Error('test-scenarios: no "testsFn" provided');
  }
  if (!isFunction(testsFn)) {
    throw Error('test-scenarios: "testsFn" should be a function');
  }

  const arrayOfScenarios = Array.isArray(testScenarios)
    ? testScenarios
    : [testScenarios];

  arrayOfScenarios.forEach((parameters, index) => testsFn(parameters, index));
};

module.exports = scenarios;
