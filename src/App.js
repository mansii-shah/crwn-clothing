
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/home-page/home-page.component.jsx';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
