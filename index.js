const scenarios = (testScenarios, testsFn) => {
  if (!testScenarios) return;
  if (!testsFn) {
    throw Error('scenarios: no test function provided');
  }
  const arrayOfTestScenarios = Array.isArray(testScenarios) ?
    testScenarios : [testScenarios];

  arrayOfTestScenarios.forEach(parameters => {
    return testsFn(parameters);
  });
};

module.exports = scenarios;