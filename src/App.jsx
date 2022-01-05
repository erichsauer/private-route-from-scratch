import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import Guestbook from './views/Guestbook/Guestbook';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Login} />
            <ProtectedRoute exact path="/guestbook" component={Guestbook} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
