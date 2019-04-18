import React from 'react';
import Backdrop from "./components/Backdrop";
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import List from './components/List/index';
import Footer from './components/Footer/index';

import './App.scss';

// const store = createReducer();

function App() {
  return (
    <div className="App">
      <Backdrop/>
      <Header/>
      <Sidebar/>
      <List/>
      <Footer />
    </div>
  );
}

export default App;
