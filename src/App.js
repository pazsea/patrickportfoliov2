import React, { Component } from "react";
import Welcome from "./components/js/Welcome";
import Portfolio from "./components/js/Portfolio";
import AboutMe from "./components/js/AboutMe";
import Navbar from "./components/js/Navbar";
import SideDrawer from "./components/js/SideDrawer";
import Backdrop from "./components/js/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };



  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    

 
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <React.Fragment>
        <Welcome />
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
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
