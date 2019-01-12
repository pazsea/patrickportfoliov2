import React, { Component } from "react";
import Welcome from "./components/js/Welcome";
import Portfolio from "./components/js/Portfolio";
import AboutMe from "./components/js/AboutMe";
import Navbar from "./components/js/Navbar";
import SideDrawer from "./components/js/SideDrawer";
import Backdrop from "./components/js/Backdrop";
import RightDrawer from "./components/js/RightDrawer";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    rightDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  rightDrawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        rightDrawerOpen: !prevState.rightDrawerOpen
      };
    });
  };

  backDropClickHandler = e => {
    e.preventDefault();
    this.setState({ sideDrawerOpen: false });
    this.setState({ rightDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }

    if (this.state.rightDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <React.Fragment>
        <Welcome />
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          rightDrawerClick={this.rightDrawerToggleClickHandler}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          close={this.backDropClickHandler}
          rightDrawerClick={this.rightDrawerToggleClickHandler}
        />
        {backdrop}
        <RightDrawer
          show={this.state.rightDrawerOpen}
          click={this.backDropClickHandler}
        />
        {backdrop}
        <AboutMe />
        <Portfolio {...this.props} />
      </React.Fragment>
    );
  }
}

export default App;
