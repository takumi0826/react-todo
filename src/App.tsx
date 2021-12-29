import './App.css';

import Home from 'pages/Home';
import Task from 'pages/Task';
import * as React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page1/detail">detail</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
