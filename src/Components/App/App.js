import { HomePage } from '../HomePage/HomePage';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { CatPage } from '../CatPage/CatPage';
import { ExplicitPage } from '../ExplicitPage/ExplicitPage';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cat-affirmations" component={CatPage} />
        <Route path="/not-cat-affirmations" component={ExplicitPage} />
      </Switch>
  )
}

export default App;
