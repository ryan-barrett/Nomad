import React, { Component } from "react";
import Carousel from "./Carousel.js";
import TopicList from "./TopicList.js";
import CityListAndShowcase from "./CityListAndShowcase.js";
import $ from "jquery-ajax";

class BodyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      selectedCityObj: {},
      selectedPosts: []
    };
  }

  componentWillMount = () => {
    $.ajax({
      method: "GET",
      url: "https://wayfar.herokuapp.com/api/cities/"
    }).then(
      res => {
        this.setState({
          cities: res,
          selectedCityObj: res[0]
        });
        this.loadPostsFromServer();
      },
      err => {
        console.log("error: ", err);
      }
    );
  };

  loadCitiesFromServer = () => {
    $.ajax({
      method: "GET",
      url: "https://wayfar.herokuapp.com/api/cities/"
    }).then(
      res => {
        this.setState({
          cities: res,
          selectedCityObj: res[0]
        });
        this.loadPostsFromServer();
      },
      err => {
        console.log("error: ", err);
      }
    );
  };

  loadPostsFromServer = () => {
    $.ajax({
      method: "GET",
      url:
        "https://wayfar.herokuapp.com/api/cities/" +
        this.state.selectedCityObj._id +
        "/posts"
    }).then(res => {
      this.setState({ selectedPosts: res.postsByCity });
    });
  };

  componentDidMount = () => {
    this.loadCitiesFromServer();
  };

  handleCitySelect = event => {
    event.preventDefault();
    let cityId = $(event.target)
      .closest(".click-for-city")
      .data("city-id");

    let allCities = this.state.cities;

    let newSelectedCityObj = allCities.filter(function(city) {
      return city._id === cityId;
    });

    this.setState({ selectedCityObj: newSelectedCityObj[0] });

    $.ajax({
      method: "GET",
      url: "https://wayfar.herokuapp.com/api/cities/" + cityId + "/posts"
    }).then(res => {
      this.setState({ selectedPosts: res.postsByCity });
    });
  };

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <div>
          <div className="splash container-fluid" />
          <TopicList
            cities={this.state.cities}
            handleCitySelect={event => this.handleCitySelect(event)}
          />
        </div>
      );
    }
    return (
      <CityListAndShowcase
        cities={this.state.cities}
        selectedCityObj={this.state.selectedCityObj}
        selectedPosts={this.state.selectedPosts}
        handleCitySelect={event => this.handleCitySelect(event)}
        loadPostsFromServer={event => this.loadPostsFromServer(event)}
      />
    );
  }
}

export default BodyContainer;
