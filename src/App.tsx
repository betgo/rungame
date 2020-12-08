import React from 'react';

import './App.less';
import Main from './page/main/main'
import Header from './page/Header/Header';
import Left from './page/Left/Left';
import Right from './page/Right/Right';

function App() {
  return (
    <div className="App" >
      <Header></Header>
      <Left></Left>
      <Right></Right>
      <Main></Main>
    </div>
  );
}

export default App;
