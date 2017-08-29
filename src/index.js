import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';


//IMPORT BROWSER ROUTER, ROUTER AND SWITCH

import About from './components/About';
import Menu from './components/Menu';
import BaseLayout from './components/Layout';
import Find from './components/Findus';
//IMPORT COMPONENTS



ReactDOM.render((
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/findus" component={Find} />
        <Route path="/menu" component={Menu} />
        <Route exact path="/" component={About}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>


),document.getElementById('root'));
registerServiceWorker();
