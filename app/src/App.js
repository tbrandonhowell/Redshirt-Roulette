import React, { Component } from "react";
import './App.css';
import shuffle from './Shuffle'; // shuffle function from https://stackoverflow.com/a/2450976/1293256
import picArray from './Array'; // our array of image names and IDs
import Header from "./components/header";
import Gamebody from "./components/gamebody";

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
      this.setState({
        answersArray: tempAnswersArray,
        currentScore: this.state.currentScore + 1 
      },function(){
        console.log("this.state.answersArray:");
        console.log(this.state.answersArray);
      });
    } else {
      console.log("incorrect answer");
      tempAnswersArray = [];
      this.setState({
        answersArray: tempAnswersArray,
        currentScore: 0
      },function(){
        console.log("this.state.answersArray:");
        console.log(this.state.answersArray);
      });
    }
    let tempImageArray = shuffle(this.state.imageArray.slice());
    this.setState({imageArray: tempImageArray});
  };

  render() {
    return (
      <div className="App">
        <Header
          currentScore={this.state.currentScore}
        />
        <div id="second-header">
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        <Gamebody
          imageArray = {this.state.imageArray}
          catchAnswer = {this.catchAnswer}
        />
        <div id="footer">
          <p>FontMeme</p>
        </div>
      </div>
    );
  }
}

export default App;
