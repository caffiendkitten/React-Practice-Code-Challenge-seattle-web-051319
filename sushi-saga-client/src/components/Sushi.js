import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" onClick={()=> props.eatSushi(props.sushi)}>
        { props.sushi.isEaten ? null : <img src={props.sushi.img_url} width="100%" alt="" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
