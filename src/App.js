import {Switch, Route} from 'react-router-dom';

import Header from './components/header';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import ErrorPage from './pages/errorpage';


const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path = "/" >
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
       <h1>Hello this is my app</h1>
    </div>
  );
}

export default App;