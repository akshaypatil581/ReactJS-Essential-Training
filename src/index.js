import React, {Component} from 'react'
import {render} from 'react-dom'
import Library from './Library'

let bookList = [
  {"title": "The Sun Also Rises", "auther": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "auther": "Kurt Vonnegut", "pages": 304}
]


// Above is just one of the way to do the rendering for elemenst but 
// it can slos be done using following ways, following is with minimal syntax
//These are function components which can be shown depending upon certain conditions
// mostly that condition is state variable 




render (
  <Library books={bookList}/>,
  document.getElementById('root')
)

/*
  {State}
  Components can have various states and to use this we need to use ES6 component called 
  class 
  Sates are usful to maintain state of compoment 
  When working with react its a good rule of thump to keep 
  state in root of the tree
  in this case Library component should hold all the state variables and passs it down
  to other child components 

  {Conditional Rendering}
  We have already used rendering on conditon at Library opena and close 
  same conditons could be used to render components 

  {React component lifecycle provides functions that are invoked at specific times}
  during rendering lifecycle
  Component life cycle syntax is only avaialeble when you are using it with classes but it's
  not available with function 

  only required method from component life cycle is render

*/