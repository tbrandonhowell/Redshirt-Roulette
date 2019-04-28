import React from "react"

function Gamebody (props) {

    return (
        <div id="gameBody"> 
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
    )
}

export default Gamebody;



