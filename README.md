# react-form-validation-enzyme-test-webpack
Simple React form validation.  Validation testing with mocha, expect and enzyme.  Sass compilation.  Hot reloading development with webpack.  Webstorm breakpointing.

Uses Abramov's ideas of 'container' and 'presentation' components.  EnquiryForm, for example, is a presentation component - no business logic.  CakeEnquiry, the 'container' has the change handlers, validation logic etc.

To run:
```
npm install
npm start -s
http://localhost:3000
```

To set breakpoints in Webstorm, start the app, as above, then choose the JavaScript Debug debug script from WebStorm's Run menu.

Console logging gives a warning but works in the webpack dev config.

To Do:

- Add Sass support to the Webpack production build 
- Make a RadioButton component
