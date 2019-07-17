import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import LogInPage from './components/LogInPage';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={LogInPage} />
        <Route exact path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
