import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
import About from './About';
import Menu from './Menu';
import BaseLayout from './Layout';
import Find from './Findus';
//IMPORT COMPONENTS



ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>

      <Switch>
        <Route path="/findus" component={Find} />
        <Route path="/menu" component={Menu} />
        <Route path="/" component={About}/>
      </Switch>

    </BaseLayout>
  </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
