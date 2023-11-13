# Password Validator Component

## Problem

We have many different React frontend applications, all of which currently use their own password validation for users creating a new password. This is less than ideal, since whenever there’s an issue we sometimes fix it in one frontend, and not another. Recently, the security consultants have told us we need to add another constraint to all our applications on passwords, so now is the time to refactor these applications to use a single, shared library.

However, not all our applications have the same password requirements - some of our applications require longer passwords in order to comply with certain regulations, some require special characters and others don’t, etc.

### Requirements

- The React component should accept a list of password requirements as a prop, e.g., `options={passwordReqs}`
- The following password requirements must be implemented and available in the library:
  - Has one or more of these special characters: `!@#$%^&*`
  - Has a number/digit
  - Has an uppercase letter
  - Has NO consecutive letters
- The component should be styled according to the provided design.
- There should be a way to validate the implementation.

### Building and Running

1. Install dependencies:

```bash
npm install
````

2. Start the development server:
   
```bash
npm start
````

3. Open your browser and visit http://localhost:3000 to view the component.


### Testing

Automated tests are included to validate the functionality of the Password Validator component.

To run the tests:

```bash
npm test
````

### Additional Notes

- The `PasswordValidator` component includes a flexible design, and its appearance can be extended.
- `data-testid` attributes have been added for testing purposes.
- The solution is implemented using React, Emotion Styled components, and Material-UI.