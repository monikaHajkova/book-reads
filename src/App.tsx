import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'reset-css'
import Home from './Home/components/Home/Home';
import Library from './Library/components/Library/Library';
import Profile from './Profile/components/Profile/Profile';
import Navbar from './Shared/components/NavBar/NavBar';

const navigation = {
  brand: { name: "BookReads", to: "/home" },
  links: [
    { name: "Home", to: "/home" },
    { name: "Library", to: "/library" },
    { name: "Profile", to: '/profile' }
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
            <Route path="/home" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}