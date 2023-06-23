# Michelle's Guide to Testing

0. Pull up an example of other tests for this framework/type of code (React, basic JS, Express backend tests, etc)
1. Choose what you're going to test (function, component/page of your app, route)
2. Think about all the different ways that that thing should behave and try to come up with a test case for each different way it should behave
  a. for different input sizes (small strings vs large strings)
  b. if inputs are missing
  c. trigger all the conditionals
3. For each test case, write a test that:
  a. sets up the input data for the test case
  b. calls your code with that input data
  c. asserts/expects something about the output
