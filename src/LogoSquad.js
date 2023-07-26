// Logo.js
import React from 'react';
import Squad from './THE GenAI SQUAD.svg'

function LogoSquad() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '120px',
      }}
    >
        <img alt='' src={Squad}/>

    </div>
  );
}

export default LogoSquad;