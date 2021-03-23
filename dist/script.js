function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

const initialState = `
  This is a paragraph
  
  # heading
  ## heading2
  
  
  
  [Visit my website](https://google.com)
  
  this is a inline \`<div></div>\`
  
  this is a block
   \`\`\`
    let s = 3;
    let b = 4;  
    let z = s + b;
   \`\`\`
   
   - list item1
  - list item2
  - list item3
  
  
  >block quote!
   ![image](https://www.logolynx.com/images/logolynx/90/90cdeb260df361a39d97540d9c75a814.png)
  
  
  **this is bolded text**
`;

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
      text: initialState });_defineProperty(this, "handleChange",




    e => {
      this.setState({
        text: e.target.value });

    });}

  render() {

    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "MarkdownConverter"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Enter your text"), /*#__PURE__*/
      React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })), /*#__PURE__*/

      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h6", { className: "text-center" }, "Result:"), /*#__PURE__*/
      React.createElement("div", { className: "preview rounded", id: "preview", dangerouslySetInnerHTML: { __html: markdown } })))));




  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));