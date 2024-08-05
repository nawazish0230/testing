## 1. TDD -> It is a software developement process where you write tests before writing the software code

Once the tests have been written, you then write the code to ensure the tests pass

1. Create tests that verify the fucntionality of a specefic feature
2. Write software code that will run the tests sucessfully when re-executed
3. Refactor the code for optmization while ensuring the tests continue to pass
   Also called red-green testing as all tests go from a red failed state to agreeen passed state

## 2. Misc points

- test.only -> only this test will run
- test.skip -> doing this will skip the test
- alternative of test.only is "fit" here
- alternative of test.skip is "xit" here

## 3.Filename conventions

1. Files with .test.js or .test.tsx suffix
1. Files with .spec.js or .spec.tsx suffix
1. Files with .js or .tsx suffix in **tests** folders
   Recommendation is to always put your tests next to your code they are testing so that relative imports are shorter

## 4. Code coverage

add text toturial -14 - https://www.youtube.com/watch?v=W-dc5fpxUVs&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=14
