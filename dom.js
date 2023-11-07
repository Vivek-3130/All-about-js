/*--------------------------------------- Basic Of Document Object Model (DOM)------------------------------------*/ 

/*With the object model, JavaScript gets all the power it needs to create dynamic HTML:

JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page


From the HTML above you can read:

<html> is the root node
<html> has no parents
<html> is the parent of <head> and <body>
<head> is the first child of <html>
<body> is the last child of <html>
and:

<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings
*/ 

// 1. Finding the HTML body- document.body

// const myBody=document.body;
// myBody.style.backgroundColor="hotpink";
// console.log(myBody);

// 2 . Finding the HTML elment by id name:- document.getElementById("idName")

// const box2 = document.getElementById('box-2');
// console.log(box2);

// 3 . Finding the HTML elment by tag name:- document.getElementByTagName("tagName")
// const boxes = document.getElementsByTagName('div') ; // getElementsByTagName is a method of Document Object Model (DOM) which returns an array containing.
// console.log(boxes);

// const boxesArray = Array.from(boxes) //converting nodelist into array for looping through each element of that list
// console.log(boxesArray);

/*
HTMLCollection(5)
[div.container, div#box-1.box, div#box-2.box, div#box-3.box, div#box-4.box,
box-1: div#box-1.box, box-2: div#box-2.box, box-3: div#box-3.box, box-4: div#box-4.box]
*/

// 4 . Finding the HTML elment by class name:- document.getElementByClassName("className")
// const boxesClass = document.getElementsByClassName('box') // returns an array of objects with a length property that tells you how many items are in this collection.
// console.log(boxesClass);

//5 . Finding the HTML elment by CSS selector:- document.querySelector("query")
// const boxesQueryAll = document.querySelector('.container .random'); // returns a NodeList of matching Elements (not an Array!)..container ke andr vala random specify kr diya
// console.log(boxesQueryAll);

//6 . Finding the HTML elment by CSS selector:- document.querySelectorAll("query")
// const boxAll = document.querySelectorAll('.container .box');
// console.log(boxAll);


/*----------------------------Modifications In HTML--------------------------------*/
   
// 1.changing the HTML contemt usisng innerHTML = document.getElementById(id).innerHTML = new HTML
// const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h4>Hello</h4> <p>Namaste Duniya</p>";

// 2.changing the HTML attributes value = document.getElementById(id).src='landscape.jpg';
// 3.document.getHTMLById('p2').style.color='blue';


/* 4.modifying class in HTML
element.classList.add('mystyle');
element.classList.remove("mystyle");
element.classList.toggle("mystyle");
*/

// box1.classList.add('round-border'); //if we want to apply on one class

//for fetching what is written inside the boxes
/*
 const boxesClass = document.getElementsByClassName('box');
 for (let i=0;i< boxesClass.length ;++i){
     console.log(`Box ${i+1} is :${boxesClass[i].innerText}`);
};
*/

//if we want to apply on more than one class, we can use for loop

/* const boxesClass = document.getElementsByClassName('box');
 for(let i=0; i<boxesClass.length; i++){
     //console.log(`Box ${i+1} :`, boxesClass[i]); // Box 1 : [object HTMLDivElement], Box
     boxesClass[i].classList.add('round-border');
}
*/

// box1.classList.remove('box') //this how we can remove the class 
// box1.classList.remove('round-border') //this how we can remove the styling from that particuar class or id



//box1.style.backgroundColor="salmon";//if we want to apply on one class;

//if we want to apply on more than one class, we can use for loop
/*
const classbox = document.getElementsByClassName('box');
for(let i=0; i<classbox.length;i++){
     console.log(classbox[i]);
     console.log(`Box ${i+1}:`,classbox[i])

     classbox[i].style.backgroundColor='red'

     console.log(`Box ${i+1} : ${classbox[i].innerText="<h3>I'm Inside For loop</h3>"}`)
     console.log(`Box ${i+1} : ${classbox[i].innerHTML="<h3>I'm Inside For loop</h3>"}`)
    
}
*/


/*------------------------------Creating and Appending HTML--------------------------------*/
/*We can create a new element using the createElement() method of the document.
we can append this new element (node) inside any other element.

const para = document.createElement("p");
const element = document.getElementsById("div1");
element.appendChild(para);
*/

/*const newpara=document.createElement('p');
newpara.innerHTML="<h4><i><u>This is new pragraph we created<u></i></h4>";
newpara.classList.add('box')

const container=document.getElementById('container');
container.appendChild(newpara);
*/


/*-----------------------------------Event Handling Using DOM----------------------------------*/ 

/*HTML code to be excecuted:-
<div class="container" id="container">
        <div class="box" id="box-1" onclick="myFunc()"> box-1 </div>
        <div class="box random" id="box-2" onmouseover="mouseOver()"> box-2 </div>
        <div class="box" id="box-3"> box-3 </div>
        <div class="box" id="box-4"> box-4 </div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus praesentium, repudiandae natus perferendis consequuntur.</p>
   <fieldset>
    <form action="#">
        <h5>This is form</h5>
        <label for="nameInput"><b>Bakchod name: </b></label>
        <input type="text" id="nameInput" onkeypress="keyPress()" onkeyup="keyup()" onkeydown="keydown()">
        <br>
        <label for="textArea"><b>Ab Bakchodi kr: </b></label>
        <input type="text" id="textArea" rows="4" cols="5">
    </form>
   </fieldset>
*/

/*
Events allow you to write javascript code that reacts to certain situtions. Examples of events includes:-
1.The user clicks the mouse button.
2.The web page loading.
3.A form field being ChannelMergerNode.

As of today there are 2 ways to handle events in javascript.
1.By using an event handler.
2.By adding an event listener.
The addEventListener() method allows you to add event listeners on any HTML DOM object such as HTML elements,
the HTML document,the window object, or other objects that support events, like the xmlHttpRequest object.
*/

// function myFunc(){
//      alert("I was clicked");
//      document.getElementById('box-1').style.backgroundColor='pink';
// }

// const mouseOver = ()=>{
//      document.getElementById('box-2').style.backgroundColor='red';
// }

//there are many mouse listener in javascript they are
//mouseDown ,mouseUp ,mouseMove .etc...

//  function keyPress(){
//       console.log('A Key Was Pressed');
//  }

//  function keyup(){
//      console.log('A Key pressed up');
// }

// function keydown(){
//      console.log('A Key pressed down');
// }

/*--------------------------------------Event Listeners---------------------------------------------*/


const box1 = document.getElementById('box-1');
// box1.addEventListener('click',()=>{
//      setTimeout(()=>{
//           console.log('clicked by event');
//      },5000)
// })

// box1.addEventListener('click',()=>{
//      setTimeout(()=>{
//           console.log('clicked by event twice');
//      },3000)
// })

// box1.addEventListener('click', (e) => { //e is an onject passed as an parameter
//      setTimeout( (p) => {
//           console.log('event object: ', e , p); //p is undefined object
//      },1000)
// })

// box1.addEventListener('mousemove',(e)=>{
//      setTimeout(()=>{
//           console.log('mouse event: ',e.clientX,e.clientY);
//      },0)
// })

// const nameInput=document.getElementById('nameInput').addEventListener('keypress' , (e) => {
//      console.log('key pressed: ',e.key); //for arrow keys and backspace we have to use 'keydown'
// })

// const nameInput=document.getElementById('nameInput').addEventListener('focus',(e)=>{
//      console.log("input focused",e);
// })


/*--------------------------------------Bubbling vs Capture---------------------------------------------*/
/*There are two ways of event propogation in the HTML DOM, bubbling and capturing.
Event propogation is a way of dealing the element order when an event occurs.

In bubbling the innermost element's event is handled first and then the outer.
In cpturing the outermost element's event is handled first and then the inner.

With the addEventListener() method you can apply specify the propagation type by using the "useCapture" parameter.

addEventListener(event,function,useCapture);

The default value is false, which will use the bubbling method.
*/


/*
Example1:-
box1.addEventListener('click',()=>{
                console.log('clicked on box');
})

const container=document.getElementById('container');
//addEventListener(event,function,useCapture);
container.addEventListener('click',()=>{  
     console.log('clicked inside container');
}, true) //ise pehle clicked container show krega baad me clcked on box show krega
*/

