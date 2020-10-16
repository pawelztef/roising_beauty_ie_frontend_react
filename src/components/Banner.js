import React from 'react'
import EmptySpace from './EmptySpace'
import { TiHeartFullOutline } from "react-icons/ti"

const Banner = (props) => {
  const {title, subtitle, call_to_action, image} = props
  const subtitleParts = subtitle.split(" ")
  return(
    <div  className="pz-container-wrapper">
      <div className="pz-row">
        <div> 
          <div className="banner__wrapper">
            <div className="banner__item"
              style={{ 
                backgroundImage: `url(${process.env.REACT_APP_API_DOMAIN+image.url})`
              }}>
                <div className="banner__item-top-layer">
                  <div className="banner__item-title">{title}</div>
                  <div className="banner__item-subtitle">
                    <span className="pz-script-font">{subtitle}</span>
                  </div>
                  {call_to_action &&
                    <a href={call_to_action.url} className="pz-btn">{call_to_action.phrase}</a>
                  }
                </div>
                <div className="banner__item-top-layer-mask">
                </div>

              </div>
            </div>
          </div>
          <EmptySpace />
        </div>
      </div>
  )
}

export default Banner
