import React, { Component } from "react";
import './App.css';
import shuffle from './Shuffle'; // shuffle function from https://stackoverflow.com/a/2450976/1293256
import picArray from './Array'; // our array of image names and IDs

console.log("picArray:");
console.log(picArray);

var shuffledArray = shuffle(picArray.slice());

console.log("shuffledArray:");
console.log(shuffledArray);

class App extends Component {

  state = {
    imageArray: [],
    answersArray: [],
    currentScore: 0
  }

  componentDidMount() {
    this.setState({imageArray: shuffledArray})
  }

  catchAnswer = (id) => {
    console.log(id);
    let tempAnswersArray = this.state.answersArray;
    if (this.state.answersArray.indexOf(id) === -1) {
      console.log("correct answer");
      tempAnswersArray.push(id);
      this.setState({answersArray: tempAnswersArray});
      console.log("this.state.answersArray:");
      console.log(this.state.answersArray);
      this.setState({currentScore: this.state.currentScore + 1 })
    } else {
      console.log("incorrect answer");
      tempAnswersArray = [];
      this.setState({answersArray: tempAnswersArray});
      console.log("this.state.answersArray:");
      console.log(this.state.answersArray);
      // TODO: why does this console log show the old version of the array? Is is printing before the state has a chance to update?
      this.setState({currentScore: 0 })
    }
    let tempImageArray = shuffle(this.state.imageArray.slice());
    this.setState({imageArray: tempImageArray});
  };

  render() {
    return (
      <div className="App">
        <div id="header">
          <span>Logo Goes Here</span> <span>You guessed right/wrong!</span> <span>Score: {this.state.currentScore} | Top Score: 12</span>
        </div>
        <div id="second-header">
          <h1>Clicky Game</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        <div id="gameBody">
          {
            this.state.imageArray.map(item => (
              <img 
                key={item[0]} 
                src={"./images/" + item[1]} 
                alt="Redshirt" 
                width="100" 
                id={item[0]} 
                className="guess" 
                onClick={() => this.catchAnswer(item[0])}
              />
            ))
          }
        </div>
        <div id="footer">
          <p>Some footer stuff</p>
        </div>
      </div>
    );
  }
}

export default App;
