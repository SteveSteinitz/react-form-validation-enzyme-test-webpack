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

Code Style:

I use the Allman style of bracing.  I acknowledge that it's less popular but I like it's clarity, especially the way it highlights conditionals and other important structures.  I also like that it naturally and elegantly reduces code 'blackness'.

I used tabs set to 4 spaces.  That editor setting will show attributes neatly lined up, for example.  I feel that using 2 spaces is unnecessarily stingy.  

I try to avoid  ({  amd }) since they make no sense, and instead put object arguments on their own line.  I do other similar things to make importat parts of the code 'pop'.

I've carefully cafted the code style for readability and quick comprehension (and, I confess, beauty).
