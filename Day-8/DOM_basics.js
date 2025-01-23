// window.console.log("hello");
// window.console.log(window);
// window.console.log(document);

// document.body.children[0].innerText;
// console.log(document.body.children[0].innerText);
// // DOM Manipulation :: Changing something in DOM using Javascript (document keyword : DOM API)
// document.body.children[0].innerText = "Done for the first half!";//not ideal methd. To lengthy and messy
// console.log(document.body.children[0].innerText);

//-------------------------
//Dom Methods
//1. getElementbyTagName
const titles= window.document.getElementsByTagName("h3");
console.log(titles)

titles[0].style.backgroundColor="yellow";
titles[1].style.backgroundColor="red";