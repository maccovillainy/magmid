import './sass/index.sass'
import './index.html'

import {Provider} from 'react-redux'
import  {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux'
import React from 'react'
import {render} from 'react-dom'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Pages from './app'

const store = createStore(()=>{}, composeWithDevTools(applyMiddleware(thunk)));


render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route  path="/" component={Pages}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  root
);
