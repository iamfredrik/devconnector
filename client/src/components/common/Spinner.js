import React from 'react';
import spinner from './ajax-loader.gif';

export default () => {
  return (
    <div>
      <img src={spinner}
        style={{width: '40px', margin: 'auto', display: 'block'}}
        alt="Loading..." 
      />
    </div>
  )
}
