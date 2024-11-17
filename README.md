# Calculator

Last redo of the previous attempt at the Odin Project.

This calculator is quite simple in its functionality:

Number -> Operator -> Number -> Operator/Equal -> Result

By selecting an operator instead of the equal sign, the operation is performed,
the result copied in the display and the calculator remains in wait for the next
number to perform the previous operation with the selected operator.

Some of the things I tried (some don't even made it to a commit) include:
- Dividing a full string compromised of a number, then an operator, and another
  number, which would then be divided into the respective parts. I could not
  quite get the array to be divided as I would hope it would (especially with
  floating numbers).
- Conditionally performing the actions through `event.target` by getting the
  contents inside the elements with `.textContent`. It became ugly really fast,
  and filtering the conditionals was too much for it to be effective.
- And last, which is the one being used, is basically adding an event listener
  to each button, either through a loop with a `NodeList` or a new variable with
  a single query.

From
[here](https://www.theodinproject.com/lessons/foundations-calculator)

