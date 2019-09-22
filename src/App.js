import React from 'react';
import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from  './pages/detail/loadable';
import Login from './pages/login';
import './style'

function App() {
  return (
    <Provider  store={store}>
      <BrowserRouter>
          <div>
              <Header/>
              <Route path="/" exact component={Home}></Route>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/detail/:id" exact component={Detail}></Route>
          </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
