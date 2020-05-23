import React, {Component} from 'react'
import {render} from 'react-dom'

// So it's like having a huge data amd then what we do is we 
/*
  We are storing it in js and then assigning it to the mes/props in 
  the component where we want it to be added 
  then we simply assign it into its component
*/

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

// Creating first component
// all of the component names should start with capital
class SkiDayCounter extends Component {
  getPercent = (decimal) => {
    return decimal * 100 + '%'
  }
  calGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }

  render() {
    const {total, powder, backcountry, goal} = this.props;
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
}
// Right now everthing is static what if we want to do this dynamic 
// for this we will be using props, first step to work with props is to pass the data to
// message component

// for message if we are passing anyother thing than string then we have to wrap it around {} brackets
render(
  <SkiDayCounter total={skiData.total} powder={skiData.powder} backcountry={skiData.backcountry} goal={skiData.goal} />,
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

