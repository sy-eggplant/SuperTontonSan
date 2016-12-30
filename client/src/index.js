import React from 'react';
import { render } from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import ScheduleContainer from './containers/ScheduleContainer';
import reducer from "./reducers";
import './index.css';


const store = createStore(reducer)

render(
  <Provider store={store}>
  	<ScheduleContainer />
	</Provider>,
  document.getElementById('root')
);
