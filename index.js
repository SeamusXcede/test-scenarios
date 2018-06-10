function isFunction (value) {
  return typeof value === 'function';
}

const scenarios = (testScenarios, testsFn) => {
  if (!testScenarios) return;
  if (!testsFn) {
    throw Error('scenarios: no test function provided');
  }
  if (!isFunction(testsFn)) {
    throw Error('scenarios: test function should be a function');
  }

  const arrayOfTestScenarios = Array.isArray(testScenarios) ?
    testScenarios : [testScenarios];

  arrayOfTestScenarios.forEach(parameters => {
    return testsFn(parameters);
  });
};

module.exports = scenarios;