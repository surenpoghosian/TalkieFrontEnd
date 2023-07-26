// Logo.js
import React from 'react';
// import Picsart from './07399866971528042460.svg'
import Picsart from  "./Artboard 1@4x.png"

function Logo() {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
        <img alt='' width={700}  src={Picsart} />
    </div>
  );
}

export default Logo;