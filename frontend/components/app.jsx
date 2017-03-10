import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="App">
    <GreetingContainer />
      {children}
  </div>
);

// You passed this to the router as the default route, the children are populated by the router

export default App;
