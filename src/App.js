import {Switch, Route} from 'react-router-dom';

import NavCenter from './components/navcenter';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';


const App = () => {
  return (
    <div className="container">
      <NavCenter />
      <Switch>
        <Route>
          <HomePage />
        </Route>
        <Route>
          <CartPage />
        </Route>
      </Switch>
       <h1>Hello this is my app</h1>

    </div>
  );
}

export default App;