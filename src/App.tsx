import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'reset-css'
import Overview from './Home/components/Overview/Overview';
import Books from './Library/components/Books/Books';
import Navbar from './Shared/components/NavBar/NavBar';

const navigation = {
  brand: { name: "BookReads", to: "/" },
  links: [
    { name: "Home", to: "/home" },
    { name: "Library", to: "/library" },
  ]
}

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <Navbar brand={brand} links={links} />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Overview />} />
            <Route path="/library" element={<Books />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}