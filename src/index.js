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

const Library = ({books}) => {
  return (
    <div>
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

render (
  <Library books={bookList}/>,
  document.getElementById('root')
)