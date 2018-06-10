function isFunction (value) {
  return typeof value === 'function';
}

const scenarios = (testScenarios, testsFn) => {
  if (!testScenarios) return;
  if (!testsFn) {
    throw Error('test-scenarios: no "testsFn" provided');
  }
  if (!isFunction(testsFn)) {
    throw Error('test-scenarios: "testsFn" should be a function');
  }

  const arrayOfTestScenarios = Array.isArray(testScenarios) ?
    testScenarios : [testScenarios];

  arrayOfTestScenarios.forEach((parameters, index) => {
    return testsFn(parameters, index);
  });
};

module.exports = scenarios;