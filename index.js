const scenarios = (testScenarios, testsToRun) => {
  const arrayOfTestScenarios = Array.isArray(testScenarios) ?
    testScenarios : [testScenarios];

  arrayOfTestScenarios.forEach(parameters => {
    return testsToRun(parameters);
  });
};

module.exports = scenarios;