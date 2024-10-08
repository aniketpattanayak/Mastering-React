/* 

<div class="parent">
  <div class="child">
    <h1>I am the h1</h1>
  </div>
</div>

*/

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

// const heading = React.createElement(
//   "h1",
//   { id: "head", className: "element", style: { color: "red" } },
//   "Hello World from React!"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
