import React from 'react';
import './App.css';


function App() {
  const [show, setShow] = React.useState(false)
  return (
    <React.Fragment>
      
        <h1>hi this is dp</h1>
    
      {
        show ? <p>Call +11 22 33 44</p> : null
      }
      <a href="#" onClick={() => setShow(!show)}>Wants to buy a new car?</a>


      <h1>thank you</h1>
    </React.Fragment>
    
  );
}
export default App;
