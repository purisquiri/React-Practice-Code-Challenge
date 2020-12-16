import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handlerEaten(props.sushiId, props.price) }>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.sushiEaten ?
            null
          :
            <img src={props.image } width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi