import React, { Component } from "react";
import Header from "./Header";
import CityContainer from "./CityContainer";

import CityInfo from "./CityInfo";
import PostBox from "./PostBox";
// import UserAuth from "./UserAuth";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col-sm-12" />
        </div>
        <div className="row">
          <div className="col-md-3 city-list-menu">
            <CityContainer />
          </div>
          <div className="col-md-9">
            <CityInfo />
            <PostBox />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
