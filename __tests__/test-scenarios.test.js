const scenarios = require('../index');

describe('test-scenarios', () => {
  let mockTestsFn;
  let testScenarios;

  describe('when no test function is passed', () => {
    it('should throw an error', () => {
      expect(() => {
        scenarios([], undefined);
      }).toThrowError('no "testsFn" provided');
    });
  });

  describe('when test function argument is not a function', () => {
    it('should throw an error', () => {
      expect(() => {
        scenarios([], 'a string but should be a function');
      }).toThrowError('should be a function');
    });
  });

  describe('whit no scenarios', () => {
    beforeEach(() => {
      mockTestsFn = jest.fn();
      testScenarios = undefined;
      scenarios(testScenarios, mockTestsFn);
    });

    it('should not run the tests', () => {
      expect(mockTestsFn).not.toHaveBeenCalled();
    });
  });

  describe('with a single scenarios', () => {
    beforeEach(() => {
      mockTestsFn = jest.fn();
      testScenarios = 'a';
      scenarios(testScenarios, mockTestsFn);
    });

    it('should run the tests once', () => {
      expect(mockTestsFn).toHaveBeenCalledTimes(1);
    });

    it('should run the tests with the test case and the test index', () => {
      expect(mockTestsFn).toHaveBeenCalledWith('a', 0);
    });
  });

  describe('with an array of scenarios', () => {
    beforeEach(() => {
      mockTestsFn = jest.fn();
      testScenarios = [1, 3, 5];
      scenarios(testScenarios, mockTestsFn);
    })

    it('should run the tests "n" times', () => {
      expect(mockTestsFn).toHaveBeenCalledTimes(3);
    });

    it('should run the tests with the test cases and the test index', () => {
      expect(mockTestsFn.mock.calls[0]).toEqual([1, 0]);
      expect(mockTestsFn.mock.calls[1]).toEqual([3, 1]);
      expect(mockTestsFn.mock.calls[2]).toEqual([5, 2]);
    });
  });
});