import React from "react"

function Gamebody (props) {

    return (
        <div id="gameBody" className="row"> 
            <div className="col s1"></div>
            <div className="col s10">
          {
            props.imageArray.map(item => (
              <img 
                key={item[0]} 
                src={"./images/" + item[1]} 
                alt="Redshirt" 
                width="100" 
                id={item[0]} 
                className={props.spinStatus} 
                onClick={() => props.catchAnswer(item[0])}
              />
            ))
          }
            </div>
            <div className="col s1"></div>
        </div>
    )
}

export default Gamebody;



