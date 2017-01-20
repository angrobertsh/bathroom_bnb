import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="App">
    <div className="bigtitle">Bathroom BnB</div>
    <GreetingContainer />
      {children}
  </div>
);

export default App;
