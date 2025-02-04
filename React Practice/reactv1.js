//----------------------------------------------------------------------

// console.log(React);

// const parent=document.getElementById("root");//real dom element
// const reactroot=ReactDOM.createRoot(parent);// making a root in react-dom and connecting it to real dom.

// //adding elements in react dom--
// //((earlier create element by document.createElement)//type--direct dom)
// const newTitle = React.createElement("h2", {}, "Hey Meen"); //type,properties,children

// console.log(newTitle);
// reactroot.render(newTitle);

//-----------------------------------------------------------------------

// const parent=document.getElementById("root");
// const reactroot=ReactDOM.createRoot(parent);

// const newTitle=React.createElement("h2", {}, "Hi, I am inside h2...yayy!");
// const newPara=React.createElement("p", {}, "Hi, I am inside para...yayy!");
// const li1=React.createElement("li",{}, "Mangoes");
// const li2=React.createElement("li",{}, "Guavas");

// const newList=React.createElement("ol",{},[li1,li2]);

// const container=React.createElement("div", {}, [newTitle,newPara,newList]); //children -->array of elements
// reactroot.render(container);
//in the root we can only render one element at a time.so to render multiple items, we create a parent and contain all elements ass array inside it

//-----------------------------------------------------------------------

