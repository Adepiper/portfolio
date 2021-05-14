import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
         </Switch>
         {/* <Route render={() => <Redirect to='/' />} /> */}
      </Router>
   );
}

export default App;
