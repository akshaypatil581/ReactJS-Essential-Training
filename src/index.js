import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
  {"title": "The Sun Also Rises", "auther": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "auther": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title, auther, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {auther}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

class Library extends React.Component {
  constructor(props) {
    super(props) // to create new instance of this class
    this.state = { // then we can add state values, state values would be several different key and values
      // it's like props but it will havle vales like our library is open 
      open: false
    } 
  }
  render() {
    // longer syntax would be | const books = this.props.books
    // one way to add local state is to use constructor

    // by referencing this.state we can use state variable 
    console.log(this.state);
    
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        {books.map(
          (book, i) => 
            <Book
              key={i} 
              title={book.title} 
              auther={book.auther} 
              pages={book.pages}/>
        )}
      </div>
    )
  }
}


render (
  <Library books={bookList}/>,
  document.getElementById('root')
)

/*
  Components can have various states and to use this we need to use ES6 component called 
  class 
  Sates are usful to maintain state of compoment 
*/