import React from 'react';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// importing all files used
import {Home} from './components/Home'; 
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    // to make all in the center 
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}> 
    {/* to be able to use global state */}
      <GlobalProvider> 
        <Router>        
        <Switch>
         <Route path="/add" component={AddUser} />
         <Route path="/edit/:id" component={EditUser} />
         <Route path="/" component={Home} />
         </Switch>
      </Router>
      </GlobalProvider>

    </div>
  );
}

export default App;
