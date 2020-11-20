import React from 'react';

import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import Content from './components/Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Content />
        <NavBar />
      </Wrapper>
    </div>
  );
}

export default App;
