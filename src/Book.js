import React, {Component} from 'react'

export const Book = ({title="Not title provided", auther="No auther", pages="0", freeBookMark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {auther}</p>
        <p>Pages: {pages} pages</p>
        <p>Free Bookmark Today: {freeBookMark ? 'Yes!' : 'No!'}</p>
      </section>
    )
  }