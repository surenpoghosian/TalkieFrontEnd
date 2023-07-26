import React from 'react';
import Talkie from './Talkie (2).svg'

function LogoTalkie() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '12px 12px 40px 12px',
      }}
    >
        <img alt='' src={Talkie}/>

    </div>
  );
}

export default LogoTalkie;