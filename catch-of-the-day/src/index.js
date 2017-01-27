// let's go!
import React from 'react';
// just import render method from react-dom
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';
import './css/style.css';

import App from './components/App';

import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


// 1st: render what component
// 2nd: render to what DOM element
// render(<StorePicker/>, document.querySelector('#main'));
// render(<App/>, document.querySelector('#main'));
render(<Root/>, document.querySelector('#main'));
