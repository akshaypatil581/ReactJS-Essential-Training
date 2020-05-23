import React, {Component} from 'react'
import {render} from 'react-dom'

const Book = ({title, auther, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {auther}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = () => {
  return (
    <div>
      <Book title="The Sun Also Rises" auther="Ernest Hemingway" pages={260}/>
      <Book title="White Teeth" auther="Zadie Smith" pages={480}/>
      <Book title="Cat's Cradle" auther="Kurt Vonnegut" pages={304}/>
    </div>
  )
}

render (
  <Library />,
  document.getElementById('root')
)