import './App.css';

import Home from 'Home';
import Page1 from 'Page1';
import Page1Detail from 'Page1Detail';
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
          <Route path="/page1" element={<Page1 />}>
            <Route path="detail" element={<Page1Detail />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
