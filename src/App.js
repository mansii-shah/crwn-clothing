
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/home-page/home-page.component.jsx';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
