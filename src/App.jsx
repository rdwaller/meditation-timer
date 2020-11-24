import React, { useState } from 'react';

import Content from './components/Content';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';

import './App.css';

function App() {
  const [navItem, setNavItem] = useState('timer');

  return (
    <div className="App">
      <Wrapper>
        <Content 
          navItem={navItem}
        />
        <NavBar
          setNavItem={setNavItem}
        />
      </Wrapper>
    </div>
  );
}

export default App;
