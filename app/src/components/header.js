import React from "react";

function Header (props) {
    return (
        <div id="header" className="row">
            <div className="col s3">
                <h4>Your Score: {props.currentScore}</h4>
            </div>
            <div className="col s6">
                <img src="https://fontmeme.com/permalink/190427/a19c06ccfb80db6b487e3c53b349dd82.png" alt="Redshirt Roulette" id="logo"/>
            </div>
            <div className="col s3">
                <h4>Top Score: 12</h4>
            </div>
        </div>
    )
}

export default Header;
