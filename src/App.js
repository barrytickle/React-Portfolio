import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path="/" component={HomePage} />

        {/* <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} /> */}
      </Switch>
      
    </div>
    
  );
}

export default App;
