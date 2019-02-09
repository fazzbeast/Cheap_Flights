import React, { Component } from 'react';
import './App.css';
import {  Route, Switch, withRouter } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CityPage from "./Components/Input/Input.js";
import ControlPanel from './Components/controlPanel/controlPanel.js';
import { connect } from 'react-redux';
import { fetchCities } from './actions/cityAction';
class App extends Component {
  componentWillMount(){
		this.props.fetchCities();
	}
    render() {
        const location = this.props.location;
        return (
          <div className="App">
            <div className="view-container">
            <TransitionGroup>
              <CSSTransition timeout={3000} classNames="fly" appear>
                <Switch location={location}>
                  <Route exact path="/" component={Home}/>
                  <Route  path="/location/:id" component={CityPage}/>
                  <Route  path="/ControlPanel" component={ControlPanel}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            </div>
          </div>

        );
    }
}
const mapStateToProps = state => ({
	citys: state.citys.cities
})
export default withRouter(connect(mapStateToProps, { fetchCities })(App));
