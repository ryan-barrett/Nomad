import React, { Component } from "react";

class TopicList extends Component {
  render() {
    let cityTopics = this.props.cities.map(city => {
      return (
        <div className="row splash-main">
          <div className="col-md-12 image-splash" />
          <div id="left-topic">
            <div className="topicHead light-blue lighten-1">
              <h3>Top Cities</h3>
            </div>
            <hr />
            <p>
              Find tips on a wide range of topics, from where to find historical
              landmarks to names of the best shopping centers.This is a
              perfectly tailored website for your next adventure.
            </p>
          </div>

          <div id="middle-topic">
            <div className="topicHead light-blue lighten-1">
              <h3>Destinations</h3>
            </div>
            <hr />
            <p>
              Our site is jam packed with the information you need for all your
              travels. Get excited and picture what you will experience.
            </p>
          </div>

          <div id="right-topic">
            <div className="topicHead light-blue lighten-1">
              <h3>Adventures</h3>
            </div>
            <hr />
            <p>
              Make your life easier and use Nomad to plan your next trip. Go
              explore and discover your next adventure.
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container topics">
        <div className="row container">{cityTopics[0]}</div>
      </div>
    );
  }
}

export default TopicList;
