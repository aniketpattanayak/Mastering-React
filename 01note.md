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

