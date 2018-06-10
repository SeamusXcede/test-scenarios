const scenarios = (testScenarios, testsFn) => {
  const arrayOfTestScenarios = Array.isArray(testScenarios) ?
    testScenarios : [testScenarios];

  arrayOfTestScenarios.forEach(parameters => {
    return testsFn(parameters);
  });
};

module.exports = scenarios;