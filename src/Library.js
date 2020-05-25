import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

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
  // Prop type can be considered as creating meta-data it's better and 
  // centralised way of keeping data at center, this way we are defining default data and we are also checking for it's type,
  // surprisingly this is th sfirst time I have seen type checking in javaScript
  Library.propTypes = {
    books: PropTypes.array
  }
  
  Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookMark: PropTypes.bool
  }

  export default Library