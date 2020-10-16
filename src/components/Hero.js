import React from 'react'
import EmptySpace from './EmptySpace'


const hero = (props) =>  {
  return (
    <div>
      <div className="pz-header">
        <img className="pz-header__background" src={process.env.REACT_APP_API_DOMAIN+props.background.url}/>
        <h1 className="pz-header__title">{props.title}</h1>
      </div>
      <EmptySpace />
    </div>
  )
}


export default hero
