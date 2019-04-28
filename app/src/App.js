import React, { Component } from "react";
import './App.css';
import shuffle from './Shuffle'; // shuffle function from https://stackoverflow.com/a/2450976/1293256
import picArray from './Array'; // our array of image names and IDs
import Header from "./components/header";
import Gamebody from "./components/gamebody";
// import 'materialize-css/dist/css/materialize.min.css'
// import M from "materialize-css";

// TODO: need logic for winning / losing the game

console.log("picArray:");
console.log(picArray);

var shuffledArray = shuffle(picArray.slice());

console.log("shuffledArray:");
console.log(shuffledArray);

// const instance = M.Modal.getInstance("#modal1")

class App extends Component {

  state = {
    imageArray: [],
    answersArray: [],
    currentScore: 0,
    topScore: 0,
    scoreStyle: "",
    spinStatus: "guess",
    message: "Click on a Redshirt to earn points, but don't click on any Redshirt more than once!"
  }

  componentDidMount() {
    this.setState({imageArray: shuffledArray});
  }

  catchAnswer = (id) => {
    console.log(id);
    let tempAnswersArray = this.state.answersArray;
    if (this.state.answersArray.indexOf(id) === -1) {
      console.log("correct answer");
      tempAnswersArray.push(id);
      let tempCurrentScore = this.state.currentScore + 1;
      let tempTopScore;
      if ( (this.state.currentScore + 1) > this.state.topScore ) {
        tempTopScore = this.state.currentScore + 1
      } else {
        tempTopScore = this.state.topScore
      }
      this.setState({
        answersArray: tempAnswersArray,
        currentScore: tempCurrentScore,
        topScore: tempTopScore,
        scoreStyle: "correct",
        spinStatus: "guess",
        message: "Click on a Redshirt to earn points, but don't click on any Redshirt more than once!"
      },function(){
        console.log("this.state.answersArray:");
        console.log(this.state.answersArray);
        setTimeout( () => {
          this.setState({
            scoreStyle: ""
          })
        },200)
      });
    } else {
      console.log("incorrect answer");
      tempAnswersArray = [];
      this.setState({
        answersArray: tempAnswersArray,
        currentScore: 0,
        scoreStyle: "incorrect",
        spinStatus: "guess-wrong",
        message: "You clicked the same Redshirt twice! Try Again."
      },function(){
        console.log("this.state.answersArray:");
        console.log(this.state.answersArray);
        setTimeout( () => {
          this.setState({
            scoreStyle: "incorrect-post"
          })
        },200)
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
          topScore={this.state.topScore}
          yourScore={this.state.scoreStyle}
        />
        <div id="second-header">
          <h5>{this.state.message}</h5>
        </div>
        <Gamebody
          imageArray = {this.state.imageArray}
          catchAnswer = {this.catchAnswer}
          spinStatus = {this.state.spinStatus}
        />
        <div id="footer">
          <p>Built with <a href="https://reactjs.org/">React</a> | Logo Created with <a href="https://fontmeme.com/star-trek-font/">FontMeme</a> | Created by <a href="http://brandonhowell.com">Brandon Howell</a> | GitHub <a href="https://github.com/tbrandonhowell/Redshirt-Roulette">Repo</a></p>
        </div>
      </div>
    );
  }
}

export default App;
