import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/"> {/*For Homepage*/}
              <Header />
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
           {/* <Home />
          </Route>

          <Route path="/Covid-Assessment"> For Quick Assessment
            <Header />
            <Assessment />
          </Route>
          <Route path="/FindStoreNearBy"> For Finding Store
            <Header />
            <Maps />
          </Route>
          <Route path="/AboutUS"> For webdevelopwes information
            <Header />
            <AboutUS />
          </Route>
          </Switch>
        </div>
      Header */}

    </div>
  );
}

export default App;
