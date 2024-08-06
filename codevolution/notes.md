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

## 5. Assertions

- When writing tests, we often need to check that values meet certain conditions.
- Assertions decide if a test passes or fails
  macthers reference link - https://jestjs.io/docs/using-matchers
  jest dom link - https://github.com/testing-library/jest-dom
  - expect
  - expect(value) - the arguement should be the value that your code produces
  - typically, you will use expect along with a "matcher" function to assert something about a value

## 6. What to test ?

- Test component renders
- Test component renders with props
- Test component renders in different states
- Test component reacts to events

  ### What not to test ?

  - Implementation details
  - Third party code ex. MUI components
  - Code that is not important from a user point of view ex. utility func. to show date in prettify manner

## 7. RTL Queries

- Every test we write generally invol
  add text - https://www.youtube.com/watch?v=GWRIv6kHZqk&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=17

## 8. getByRole

add text - https://www.youtube.com/watch?v=Veaql3noyyo&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=18

- Role of HTML elements [Reference][https://www.w3.org/TR/html-aria/#docconformance]

  - input -> textbox
  - select -> combobox
  - checkbox -> checkbox

- getByRole Options
  1. name -> the accesible name is for simple cases equal to
  - the label of a form element
  - the text content of a button or
  - the value of the aria-label attribute
  2. level
  3. hidden
  4. selected
  5. checked
  6. pressed
