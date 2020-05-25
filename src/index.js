import React, {Component} from 'react'
import {render} from 'react-dom'

let bookList = [
  {"title": "The Sun Also Rises", "auther": "Ernest Hemingway", "pages": 260},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "White Teeth", "auther": "Zadie Smith", "pages": 480},
  {"title": "Cat's Cradle", "auther": "Kurt Vonnegut", "pages": 304}
]

const Book = ({title="Not title provided", auther="No auther", pages="0", freeBookMark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {auther}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookMark ? 'Yes!' : 'No!'}</p>
    </section>
  )
}
// Above is just one of the way to do the rendering for elemenst but 
// it can slos be done using following ways, following is with minimal syntax
//These are function components which can be shown depending upon certain conditions
// mostly that condition is state variable 
const Hiring = () => 
  <div>
    <p>The library is Hiring. Go to www.library.com/jobs for more.</p>
  </div>

const NotHiring = () => 
  <div>
    <p>The library is not Hiring. Check back later for more info.</p>
  </div>

class Library extends Component {

  static defaultProps = {
    books: [
      {"title": "Tahoe Tales", "auther": "Chet Whitley", "pages": 1000}
    ]
  }

  state = { 
    open:true,
    freeBookMark: true,
    hiring: true,
    data: [],
    loading: false
  }
  
  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
    .then(data => data.json())
    .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log("The componenet just updated")
  }

  // constructor(props) {
  //   super(props) // to create new instance of this class
  //   this.state = { // then we can add state values, state values would be several different key and values
  //     // it's like props but it will havle vales like our library is open 
  //     open: false
  //   }
  //   // this binding line is doing the job of giving current state to method toggleOpenClosed 
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // }
  // if we used () syntax to write function it will automatically bind this to the function
  toggleOpenClosed = () => {
    // we are using setState function to change the state of component
    // setState function works asyncronusly so if we want somthig syncronous we need to use
    // callback functions can be used if we are relying on current state 
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    // longer syntax would be | const books = this.props.books
    // one way to add local state is to use constructor

    // by referencing this.state we can use state variable 
    console.log(this.state);
    
    const { books } = this.props
    return (
      <div>
        {this.state.hiring ? <Hiring/> : <NotHiring/>}
        {this.state.loading 
              ? "loading..."
              : <div>
                  {this.state.data.map(product => {
                    return (
                      <div key={product.id}>
                        <h3>Library product of the Week!</h3>
                        <h4>{product.name}</h4>
                        <img alt={product.name} src={product.image} height={100} />
                      </div>
                    )
                  })}
              </div>
        }
        <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map(
          (book, i) => 
            <Book
              key={i} 
              title={book.title} 
              auther={book.auther} 
              pages={book.pages}
              freeBookMark={this.state.freeBookMark}/>
        )}
      </div>
    )
  }
}

// class FavoriteColorForm extends React.Component {
//   state = { value: ''}

//   newColor = e => 
//     this.setState({ value: e.target.value })

//   submit = e => {
//     console.log(`New Color: ${this.state.value}`)
//     e.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <label>Favorite Color:
//           <input type="color" onChange={this.newColor}/>
//         </label>
//         <button>Submit</button>
//       </form>
//     )
//   }
// }

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