import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Top from './components/Top';
import { Notify } from './components/Notify';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/notify" component={Notify} />
      </Switch>
    </Router>
  );
};

export default App;
