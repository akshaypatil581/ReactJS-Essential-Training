import React from 'react'
import ReactDOM from 'react-dom'


// Creating first component
// all of the component names should start with capital
class Message extends React.Component {
  // All react component have render method
  /*
  render method discribes what we want to render into dom
  */
  render() {
    return (
      <div>
        <h1>Hello eveyone</h1>
      </div>
    )
  }
}





ReactDOM.render(
  <Message/>,
  document.getElementById('root')
)

/*
Reason react is so popular is because of it's
component based structure 

We simply create elements by creating nested components and we
render these components 

*/  

/*
Now we are going to specify styles which we want to apply to elements
*/
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

