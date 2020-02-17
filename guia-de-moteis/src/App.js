import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Banner from "./Components/Banner/Banner"
import Suites from "./Components/Suites/Suites"
import Separator from "./Components/Separator/Separator"

function App() {
  return (
    <div className="App">

      <Header />
      <Banner />
      <Suites />

    </div>
  );
}

export default App;
