import React from 'react'
import EmptySpace from './EmptySpace'
import Slideshow from '../utils/slideshow'
import { TiHeartFullOutline } from "react-icons/ti"
import $ from "jquery";

const Slider = (props) =>  {
  const heroEntries = props.hero_item
  const $window = $(window);
  const $body = $('body');

  let loaded = false;
  let maxLoad = 3000;  

  function load() {
    const options = {
      showPagination: true
    };

    let slideShow = new Slideshow(options);
  }

  function addLoadClass() {
    $body.addClass('is-loaded');

    setTimeout(function() {
      $body.addClass('is-animated');
    }, 600);
  }

  $window.on('load', function() {
    if(!loaded) {
      loaded = true;
      load();
    }
  });

  setTimeout(function() {
    if(!loaded) {
      loaded = true;
      load();
    }
  }, maxLoad);

  addLoadClass();


  const renderSlides = () => {
    if(heroEntries) {
      let newList = heroEntries.map((entry, i) => { 
        return (
          <div key={i} className="slideshow__slide js-slider-home-slide" data-slide={i+1}>
            <div className="slideshow__slide-background-parallax background-absolute js-parallax" data-speed="-1" data-position="top" data-target="#js-header">
              <div className="slideshow__slide-background-load-wrap background-absolute">
                <div className="slideshow__slide-background-load background-absolute">
                  <div className="slideshow__slide-background-wrap background-absolute">
                    <div className="slideshow__slide-background background-absolute">
                      <div className="slideshow__slide-image-wrap background-absolute">
                        <div className="slideshow__slide-image background-absolute" style={{backgroundImage: "url(" + process.env.REACT_APP_API_DOMAIN + entry.image.url + ")"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slideshow__slide-caption">
              <div className="slideshow__slide-caption-text">
                <div className="pz-container js-parallax" data-speed="3" data-position="top" data-target="#js-header">
                  <div className="pz-animated-banner__item-title pz-script-font">{entry.title} <TiHeartFullOutline /> </div>
                  <div className="pz-animated-banner__item-subtitle ">{entry.subtitle}</div>
                  {entry.call_to_action &&
                    <a className="pz-btn" href={entry.call_to_action.url}>{entry.call_to_action.phrase}</a>
                  }
                </div>
              </div>
            </div>
          </div>
        )
      })
      return newList
    }
  }




  return (
    <div> 
      <div id="wrapper">
        <section className="slideshow" id="js-header">
          {renderSlides()}
        </section>
      </div>
      <EmptySpace />
    </div>
  )
}


export default Slider
