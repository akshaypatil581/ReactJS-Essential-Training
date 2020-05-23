import React from 'react'
import ReactDOM from 'react-dom'

/*
Now we are going to specify styles which we want to apply to elements
*/

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

/*
  create element accepts 3 arguments
  1. element we want to create 
  2. attribute for the elements 
  3. content for the element
*/

/*
  To simplyfy some creation thins React provides us the format of JSX
  JavaScript as XML, tag based syntax to create react elements 
*/

// const title = React.createElement(
//   'ul',
//   {id: 'title', className: 'header', style: style},
//   React.createElement(
//     'li',
//     {},
//     'item on our list'
//   )
// )

/* 
  ReactDOM Accepts
  1. what you wnat to render 
  2. where you want to render 
*/
//This is JSX not HTML
ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello World!</h1>
    <p>I'm glad I'm here</p>
  </div>,
  document.getElementById('root')
)

/*
Reason react is so popular is because of it's
component based structure 

We simply create elements by creating nested components and we
render these components 

*/  

