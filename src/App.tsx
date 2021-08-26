import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Current from './components/Current';
import About from './components/About';
import HistorySelect from './components/HistorySelect';
import HistoryResult from './components/HistoryResult';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/' exact>
          <Current />
        </Route>

        <Route path='/current'>
          <Current />
        </Route>

        <Route path='/history/select'>
          <HistorySelect />
        </Route>
        <Route path='/history/result'>
          <HistoryResult />
        </Route>

        <Route path='/About'>
          <About />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
