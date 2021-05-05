
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './pages/home-page/home-page.component.jsx';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
     
    </div>
  );
}

export default App;
