import React from 'react';
import ReactDOM from 'react-dom';

import Box from './components/Box'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <div className='wrapper screen'>
      <div className='board center'>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
         <Box value='yow'/>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);