# 🚀 DAY-01 Mastering React : A Journey from Basics to Advanced Concepts 🚀

As a web developer or aspiring React enthusiast, understanding the fundamentals of React and its ecosystem is crucial for building dynamic and responsive web applications. In this post, I'll walk you through the foundational tasks and concepts of React, including how to set up a basic project, explore the React CDN, and dive into key principles like the DOM tree and styling. Let's embark on this journey together!

As I embark on this journey, I'm also diving into the "Namaste JavaScript" course, which has been incredibly enlightening. It provides a comprehensive and hands-on approach to JavaScript, enriching my understanding of React and its ecosystem.

1. Understanding React Basics
React, a popular JavaScript library, is used to build user interfaces. It simplifies creating interactive UIs by breaking them down into reusable components. React’s strength lies in its efficient update mechanism, ensuring that only the necessary components are re-rendered when data changes.

2. Setting Up Your First React Project
To start with React, you need to integrate it into your HTML. This involves including the React library and ReactDOM, which handles rendering React components to the DOM (Document Object Model).

3. Key React Functions and Concepts
    * React elements are JavaScript objects representing DOM nodes. They’re not actual HTML until rendered by ReactDOM.
    * React.createElement(): This function creates a React element, which is a plain JavaScript object representing a DOM node or component. generates a React element object rather than an actual DOM node. This object describes what the DOM should look like but isn't rendered until you call render.
    * ReactDOM.createRoot(): This method creates a root that manages the React component tree and is responsible for rendering the React elements to the DOM.
    * DOM Tree: The DOM tree is a hierarchical structure representing the document's elements. It starts from the document object and branches out to its children, representing HTML elements.
    * Node: A node is a single point in the DOM tree. Nodes can be elements, text, or other types of objects within the document.
    * root.render(): This method renders the React element into the DOM node specified.
    * 
4. Exploring React Element Structure
React elements can include properties or "props" that define their attributes. When rendered, React transforms these elements into HTML that the browser can interpret. This makes managing complex UIs more straightforward and efficient.

4. Using CDNs:
    * React is split into two main parts: react.development.js (the core library) and react-dom.development.js (for rendering to the DOM). This separation helps keep React modular and focused on its core functionalities.
    * A CDN (Content Delivery Network) delivers content efficiently to users across different locations. For React, it means you can include the library directly in your HTML without a build toolchain.

5. Styling and Nesting Elements
In React, styling is managed through properties, allowing inline styles to be applied directly. React also supports nesting elements, which is useful for building intricate UI structures.

6. Understanding React and DOM Interaction
React elements are objects representing your UI, while ReactDOM manages their rendering to the browser’s DOM. This separation ensures that React can update only the parts of the UI that have changed, optimizing performance and user experience.

7. Key Considerations
1. Crossorigin Attribute:
    * The crossorigin attribute on script and link tags controls how the browser handles cross-origin requests, impacting caching and security.
    * The crossorigin attribute is used with <script> and <link> tags to specify how the browser should handle requests for these resources. It affects how cross-origin requests are handled for things like caching and authentication. In general, it is used to control how browsers handle resources that are fetched from different origins.
2. Order of Scripts:
    * Ensure React libraries are loaded before your custom scripts. This ensures your React code runs smoothly without errors related to undefined functions.

8. React Development Tools
React’s development build includes additional warnings and checks that are beneficial during development but should not be used in production. The distinction between development and production versions helps optimize performance and debugging.

Conclusion
React is a powerful tool for modern web development, and understanding its core principles will help you create dynamic and efficient user interfaces. The "Namaste JavaScript" course has been instrumental in deepening my knowledge of JavaScript, complementing my React learning experience.
Feel free to share this guide with anyone looking to start with React or enhance their knowledge. Happy coding! 🌟

Share your thoughts or ask any questions in the comments below. Let's continue learning and growing together! 🚀



#React #WebDevelopment #JavaScript #CDN #CrossOrigin #FrontendDevelopment #CodingJourney #TechInsights


# PART 01

## TASK 01

01 - Create a HTML file a basic hello world
02 - You will jsut do that same thing using java script
03 - you will inject rect Cdn links into your project

# Research

CDN - Content Delivery Networks ?
React CDN ?
what is crossorigin ?
\_\_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED ??

Why they are 2 script file of react cdn?

1st file is React.Development.js this is the core of react..core ract frame algorithm

2nd file is react DOM (Document Object Model)

why there has 2 js files ? can not we merge 2 file into one?
there are diff in react native and react dev so there has 2 files one is for core react and another is for react web dev

# PART 02

## TASK 02

Create Hello world in HTML using React?

```javascript
<script>
  const heading = React.createElement("h1", {}, "Hello World from React!") const
  root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(heading)
</script>
```

React.createElement() is a function where we can create a HTML Tag ,which is driven by React Core Library

react is a library not a framework
ReactDOM.createRoot(select element) is a function where we can create a child, which is driven by React DOM library .

root.render(heading) it is a function which rander heading into root

# PART 03

let's jsut create a js file and write all react code inside it, caled App.js

how react works behind the sence ?

```javascript
const heading = React.createElement(
  "h1",
  { id: "head", class: "element" },
  "Hello World from React!"
);

console.log(heading);
```

in this {} braces we put props i.e. attributes of the created element.

here we think that heading is a HTML tag but that is not. when we console the heading we can see that heading is an Object it's not a HTML tag.

What is DOM Tree ?
What is Node ?

## Styling the web page using react

```javascript
const heading = React.createElement(
  "h1",
  { id: "head", className: "element", style: { color: "red" } },
  "Hello World from React!"
);
```

we can add style on a webpage using react i.e. we have to give style using props and we have to write style: and give another object within style..

# PART 04

## how to create nested element using React?

ReactElement (Object) => HTML (Browser Understand)

```html
<div class="parent">
  <div class="child">
    <h1>I am the h1</h1>
  </div>
</div>
```

### we can create this nested element using react..

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am the h1")
  )
);
```

### another nested element

```html
<div class="parent">
  <div class="child">
    <h1>I am the h1</h1>
    <h1>I am the h1</h1>
  </div>
</div>
```

```javascript
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am the h1"),
    React.createElement("h2", {}, "I am the h2"),
  ])
);
```

we can see the output but here we can see an error beacuse - some Each child in a list should have a unique "key" prop.
we will see in latter .

### another nested element

```html
<div class="parent">
  <div class="child">
    <h1>I am the h1</h1>
    <h1>I am the h1</h1>
  </div>
  <div class="child">
    <h1>I am the h1</h1>
    <h1>I am the h1</h1>
  </div>
</div>
```

```javascript
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am the h1"),
    React.createElement("h2", {}, "I am the h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am the h1"),
    React.createElement("h2", {}, "I am the h2"),
  ]),
]);
```

this nested loop is soo lenthy so we dont use like this we can use jsx which we learn later



# PART 05
### the order of script file matterd ?
yes the order of file is matter because if we use our own scrip file of react then it through error because react cdn does not defined so it will through an error 

order of file have to sequence 

### what is crossorigin ?







