(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),n=r(2),s=r.n(n),c=(r(14),r(3)),i=r(4),l=r(6),m=r(5),u=r(7),h=(r(15),function(e){for(var t,r,a=e.length;0!==a;)r=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[r],e[r]=t;return e}),d=[[1,"1.jpg"],[2,"2.jpg"],[3,"3.jpg"],[4,"4.jpg"],[5,"5.jpg"],[6,"6.jpg"],[7,"7.jpg"],[8,"8.jpg"],[9,"9.jpg"],[10,"10.jpg"],[11,"11.jpg"],[12,"12.jpg"]];var g=function(e){return o.a.createElement("div",{id:"header",className:"row"},o.a.createElement("div",{className:"col s3"},o.a.createElement("h4",{className:e.yourScore},"Your Score: ",e.currentScore)),o.a.createElement("div",{className:"col s6"},o.a.createElement("img",{src:"https://fontmeme.com/permalink/190427/a19c06ccfb80db6b487e3c53b349dd82.png",alt:"Redshirt Roulette",id:"logo"})),o.a.createElement("div",{className:"col s3"},o.a.createElement("h4",null,"Top Score: ",e.topScore)))};var p=function(e){return o.a.createElement("div",{id:"gameBody",className:"row"},o.a.createElement("div",{className:"col s1"}),o.a.createElement("div",{className:"col s10"},e.imageArray.map(function(t){return o.a.createElement("img",{key:t[0],src:"./images/"+t[1],alt:"Redshirt",width:"100",id:t[0],className:e.spinStatus,onClick:function(){return e.catchAnswer(t[0])}})})),o.a.createElement("div",{className:"col s1"}))};console.log("picArray:"),console.log(d);var w=h(d.slice());console.log("shuffledArray:"),console.log(w);var y=function(e){function t(){var e,r;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(r=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={imageArray:[],answersArray:[],currentScore:0,topScore:0,scoreStyle:"",spinStatus:"guess",message:"Click on a Redshirt to earn points, but don't click on any Redshirt more than once!"},r.catchAnswer=function(e){console.log(e);var t=r.state.answersArray;if(-1===r.state.answersArray.indexOf(e)){console.log("correct answer"),t.push(e);var a,o=r.state.currentScore+1;a=r.state.currentScore+1>r.state.topScore?r.state.currentScore+1:r.state.topScore,r.setState({answersArray:t,currentScore:o,topScore:a,scoreStyle:"correct",spinStatus:"guess",message:"Click on a Redshirt to earn points, but don't click on any Redshirt more than once!"},function(){var e=this;console.log("this.state.answersArray:"),console.log(this.state.answersArray),setTimeout(function(){e.setState({scoreStyle:""})},200)})}else console.log("incorrect answer"),t=[],r.setState({answersArray:t,currentScore:0,scoreStyle:"incorrect",spinStatus:"guess-wrong",message:"You clicked the same Redshirt twice! Try Again."},function(){var e=this;console.log("this.state.answersArray:"),console.log(this.state.answersArray),setTimeout(function(){e.setState({scoreStyle:"incorrect-post"})},200)});var n=h(r.state.imageArray.slice());r.setState({imageArray:n})},r}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({imageArray:w})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,{currentScore:this.state.currentScore,topScore:this.state.topScore,yourScore:this.state.scoreStyle}),o.a.createElement("div",{id:"second-header"},o.a.createElement("h5",null,this.state.message)),o.a.createElement(p,{imageArray:this.state.imageArray,catchAnswer:this.catchAnswer,spinStatus:this.state.spinStatus}),o.a.createElement("div",{id:"footer"},o.a.createElement("p",null,"Built with ",o.a.createElement("a",{href:"https://reactjs.org/"},"React")," | Logo Created with ",o.a.createElement("a",{href:"https://fontmeme.com/star-trek-font/"},"FontMeme")," | Created by ",o.a.createElement("a",{href:"http://brandonhowell.com"},"Brandon Howell")," | GitHub ",o.a.createElement("a",{href:"https://github.com/tbrandonhowell/Redshirt-Roulette"},"Repo"))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,r){e.exports=r(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ba824dca.chunk.js.map