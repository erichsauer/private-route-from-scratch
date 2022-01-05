import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/auth" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
