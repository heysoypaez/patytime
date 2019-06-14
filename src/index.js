import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import data from "./api.json";

render(

	<App data={data} />, document.getElementById('root') 
 );

