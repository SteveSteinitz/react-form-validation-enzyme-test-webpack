# react-form-validation-enzyme-test-webpack
Simple React form validation.  Stack configured with Webpack.  Validation testing with Mocha, Expect and Enzyme.  Sass compilation.  

Features: 
- Hot reloading development 
- Webstorm breakpointing
- Tests run automatically on save

Uses Abramov's ideas of 'container' and 'presentation' components.  EnquiryForm, for example, is a presentation component - no business logic.  CakeEnquiry, the 'container' has the change handlers, validation logic etc.

To run:
```
cd <path/to/project/directory> 
npm install
npm start -s

browser: http://localhost:3000
```

To set breakpoints in Webstorm, start the app, as above, then choose the JavaScript Debug debug script from WebStorm's Run menu.

Console logging gives a warning but works in the webpack dev config.

To Do:

- Get webpack production build working: add Sass support 
- Make a RadioButton component
