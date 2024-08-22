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

- Every test we write generally involves the following basic steps

  - Render the component
  - find an element rendered by the component
  - Assert against the element found in step 2 which will pass or fail the test

  To render the component, we use the render method from RTL.
  For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom

- Queries are the methods that Testing Library provides to find elements on the page

  - to find a single element on the page, we have

    - getBy
    - queryBy
    - findBy

  - to find multiple elements on the page, we have
    - getAllBy
    - queryAllBy
    - findAllBy

  The suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

  _getBy.. queries_

  - getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.

## 9. Query Methods

### 9.1 getByRole

- **getBy..** queries\*

  - getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.
  - The suffix can be one of Role, LabelText, PlaceHolderText, Text, DisplayValue, AltText, Title and finally TestId

- **getByRole**

  - getByRole queries for elements with the given role.
  - Role refers to the ARIA(Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them
  - By default, many semantic elements in HTML have a role
  - Button element has a button role, anchor element has a link role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role and so on.
  - If you're working with elements that do not have a default role or if you want to specify a different role, the role attribute can be used to add the desired role
  - To use an anchor element as a button in the navbar, you can add role="button"

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

## 12. Manual Queries

- we can use the regular querySelector DOM API to find elements

```
const {container} = render(<MyComponent>)
const foo = container.querySelector('[data-foo="bar"]')
```

- but its not recommended to use as it not visible to user, so better use above query method getBy, queryBy, findBy

## 13. Debugging

- screen.debug() -> to visualized the formatted state of the dome tree at any point during the test
- logRoles(view.container) -> to print out the list of all aria-label which is present in the dom-tree

## 14. User Interactions

- User Interactions

  - A click using a mouse or a keypress using a keyboard
  - Software has to response to such interactions
  - tests should ensure the interaction are handled as expected

- user-event

  - A companion library for Testing Library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser
  - It is the recommended way to test user interaction with RTL

- fireEvent vs user-event
  - fireEvent is a method from RTL which is used to dispatch DOM events
  - user-event simulates full interactions, which may fire multiple events and do additional checks along the way
  - for example, we can dispatch the change event on an input field using fireEvent
  - When a user types into a text box, the element has to be focused, and then keyboard and input events are fired and the selection and value on the element are manipulated as they type.
  - user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and intractablity checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g wouldn't let a user click a hidden element or type in a disabled text box

**Pointer Interactions**

_Convenience APIs_

- click()
- dblClick()
- tripleClick()
- hover()
- unhover()

lower pointer apis list link [https://www.youtube.com/watch?v=pyKS3H2i7gk&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=37]

## 15. Keyboard Interactions

notes [https://www.youtube.com/watch?v=kqX14UyjhDM&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=37]
