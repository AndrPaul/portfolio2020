import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import CV from "./components/cv/CV";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./sass/App.scss";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'CV', path: '/cv' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Hello, my name is Paul',
        subTitle: "I'm a web developer",
        
      },
      porfolio: {
        title: 'Portfolio'
      },
      cv: {
        title: 'Download my CV'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div className="app-wrap">
          <Switch>
          <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle}  />} />
          <Route path="/portfolio"  render={() => <Portfolio title={this.state.porfolio.title} subTitle={this.state.porfolio.subTitle}  />} />
          <Route path="/cv" render={() => <CV title={this.state.cv.title} subTitle={this.state.cv.subTitle}  />} /> 
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} subTitle={this.state.contact.subTitle}  />} />
          <Route path="/footer" component={Footer} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
