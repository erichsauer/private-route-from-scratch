import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthProvider } from './context/AuthContext/AuthContext';
import { EntryProvider } from './context/EntryContext/EntryContext';
import EmailConfirmation from './views/EmailConfirmation/EmailConfirmation';
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
              <Route exact path="/login">
                <AuthForm existingUser />
              </Route>
              <Route exact path="/signup">
                <AuthForm />
              </Route>
              <Route exact path="/email-confirmation">
                <EmailConfirmation />
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
