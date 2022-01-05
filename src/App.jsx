import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { EntryProvider } from './context/EntryContext/EntryContext';
import Guestbook from './views/Guestbook/Guestbook';
import Home from './views/Home/Home';
import Layout from './views/Layout/Layout';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <EntryProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/auth">
                <Login />
              </Route>
              <ProtectedRoute exact path="/guestbook">
                <Guestbook />
              </ProtectedRoute>
            </Switch>
          </Layout>
        </EntryProvider>
      </AuthProvider>
    </Router>
  );
}
