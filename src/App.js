// App.js
import React from 'react';
import './App.css';
import AudioForm from './AudioForm';
import Logo from './Logo'; // Import the Logo component
import LogoSquad from './LogoSquad';


function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <Logo /> 
        <AudioForm />
      </div>
      <div className='credentialsContainer'>

        <span>IOS Students &nbsp;</span>
        <span>&copy; Suren Poghosyan &nbsp;</span>
        <span>&copy; Garik Hovsepyan</span>
        <span><br/>#IOS #HACKDAY &nbsp; #PicsartAcademy &nbsp;</span>
      </div>
    </div>
  );
}

export default App;
