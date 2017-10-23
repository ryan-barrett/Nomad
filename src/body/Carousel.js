import React, { Component } from "react";
import "../Home.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [
        {
          _id: "59a59993ae49b000075d005e",
          name: "San Francisco",
          description:
            "San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time.",
          img_url: "https://image.ibb.co/iRiSok/sf.jpg",
          __v: 0
        },
        {
          _id: "59a59993ae49b000075d005f",
          name: "London",
          description:
            "London is the capital of the United Kingdom, a country in western Europe. It is also the capital of England, which is part of the United Kingdom. London lies on the Thames River. It is the largest city in the country.",
          img_url: "https://i.imgur.com/LziiBHl.jpg",
          __v: 0
        },
        {
          _id: "59a59993ae49b000075d0060",
          name: "Sydney",
          description:
            "Sydney, capital of New South Wales and one of Australias largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.",
          img_url: "https://image.ibb.co/g2up15/aussie.jpg",
          __v: 0
        }
      ]
    };
  }

  render() {
    let citiesImages = this.state.cities.map(city => {
      return (
        <a
          key={city._id}
          className="carousel-item click-for-city"
          data-city-id={city._id}
        >
          <img src={city.img_url} alt="" key={city._id} />
        </a>
      );
    });
    return (
      <div className="col s12 carousel-holder">
        <div className="splash container-fluid" />
        <div className="carousel carousel-slider">{citiesImages}</div>
        <i className="material-icons icon icon-left">chevron_left</i>
        <i className="material-icons icon icon-right">chevron_right</i>
      </div>
    );
  }
}

export default Carousel;
