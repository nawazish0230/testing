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
  add notes - [https://www.youtube.com/watch?v=GWRIv6kHZqk&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=17]

## 9. Query Methods

### 9.1 getByRole

add notes - [https://www.youtube.com/watch?v=Veaql3noyyo&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=18]

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

### 9.2 getByLabelText

- it will search for the label that matches the given text, then find the element associated with that label

### 9.3 getByPlaceholderText

- it will search for all elements with a placeholder attribute and find one that matches the given text

### 9.4 getByText

- it will search for all elements that have a text node with textContent matching the given text

### 9.5 getByDisplayValue

- It will return the input, textarea, or select element that has the matching diplay value

### 9.6 getByAltText

- it will return the element that has the given alt text
- this method only supports elements which accept an alt attribute like <img/>, <input/>, <area> or custom HTML elements

### 9.7 getByTitle

- It returns the element that has the matching title atrribute

### 9.8 getByTestId

- It returns the element that has the matching data-testid attribute

### When to use what | Priority order for queries

- Your test should resemble how users interact with your code (component, page etc) as much as possible

1. getByRole
2. getByLabelText
3. getByPlaceholderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

## 10. Query Multiple Elements

getAllByRole

- RTL getAllBy Queries
  - find multiple elements in the DOM
  - getAllBy returns an array of all matching nodes for a query, and throws an error if no elements match

## 11. queryBy and queryAllBy

- queryBy

  - returns the matching node for a query, and return null if no elements match
  - useful for asserting an element that is not present
  - throws an error if more than one match is found

- queryAllBy

  - returns an array of all matching nodes for a query, and return an empty array if no elements match

- getBy and getAllBy class of queries to assert if elements are present in the DOM
- queryBy and queryAllBy class of queries to assert if elements are not present in the DOM

_Appearance /Disappearance_

- What if elements are not present in the DOM to begin but make thier way into the DOM after some time ?
- for ex, data that is fetched from a server will be rendered only after a few milliseconds

## 11. findBy and findAllBy

- findBy

  - returns a promise which resolves when an element is found which matches the given query
  - the promise is rejected if not element is found or if more than one element is found after a default timeout of 1000ms

- findAllBy

  - returns a promise which resolves to an array of elements when any elements are found which match the given query
  - then promise is rejected if no elements are found after a default timeout of 1000ms

## Manual Queries

- we can use the regular querySelector DOM API to find elements

```
const {container} = render(<MyComponent>)
const foo = container.querySelector('[data-foo="bar"]')
```

- but its not recommended to use as it not visible to user, so better use above query method getBy, queryBy, findBy

## Debugging

- screen.debug() -> to visualized the formatted state of the dome tree at any point during the test
- logRoles(view.container) -> to print out the list of all aria-label which is present in the dom-tree
