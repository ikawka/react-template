import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from './components/Home';
import Status from './components/Status';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: Status },
  childRoutes: [
    {
      path: '/login',
      getComponent(location, cb){
        System.import('./components/Login').then( module => cb(null, module.default) );
      }
    },
    {
      path: '/entry',
      getComponent(location, cb){
        System.import('./components/Entry').then( module => cb(null, module.default) );
      }
    },
    {
      path: '/entries',
      getComponent(location, cb){
        System.import('./components/Entries').then( module => cb(null, module.default) );
      }
    },
    {
      path: '/vote/:id',
      getComponent(location, cb){
        System.import('./components/Vote').then( module => cb(null, module.default) );
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
};

export default Routes;