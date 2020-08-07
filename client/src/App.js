import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import CV from "./components/cv/CV";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import axios from 'axios';
import ScrollToTop from './ScrollToTop';

import "./sass/App.scss";



const App = (props) => {
 
  const [header, setHeader] = useState({});

  useEffect(() => {
    axios.get('/api/metainfo')
      .then(res => {

        setHeader(res.data)
        // return[...res.data]
      })
  }, []);
  
 
  return (

    <Router>
 
      <div className="App">
      <ScrollToTop />
        <NavBar />

        <main className="app-wrap">
          <AnimatePresence>
          <Switch>
            <Route path="/" exact render={Home} />
            <Route path="/portfolio"  render={() => (<Portfolio title={header.length > 0 ? header[0].portfolio.title : ''} subTitle={header.length > 0 ? header[0].portfolio.subTitle : ''} />)} />
            <Route path="/cv" render={() => (<CV title={header.length > 0 ? header[0].cv.title : ''} subTitle={header.length > 0 ? header[0].cv.subTitle : ''} />)} />
            <Route path="/contact"  render={() => (<Contact title={header.length > 0 ? header[0].contact.title : ''} subTitle={header.length > 0 ? header[0].contact.subTitle : ''} />)} />

          </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
