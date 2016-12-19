import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello.jsx';
import World from './components/world.jsx';

ReactDOM.render(
  <div> 
		<Hello /> 
		<World /> 
	</div>,
  document.getElementById('app')
);
