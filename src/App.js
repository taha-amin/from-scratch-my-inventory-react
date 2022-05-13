import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import { BrowserRouter as Router, Switch, NavLink, Route, Redirect } from 'react-router-dom';
import AuthPage from './AuthPage';
import ListRestaurant from './ListPage';
import UpdatePage from './UpdatePage';
import './App.css';
import { logout } from './services/fetch-utils';
import CreateRestaurant from './CreatePage';

export default function App() {
  const [email, setEmail] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const user = getUser();

    if (user) {
      setToken(user.access_token);
      setEmail(user.user.email);
    }
  }, []);

  async function handleLogout() {
    await logout();

    setEmail('');
    setToken('');
  }

  return (
    <Router>
      <div className="App">
        <header>
          {/* if there is a user in state, render out a link to the board games list, the create page, and add a button to let the user logout */}
          {token && (
            <>
              <NavLink exact activeClassName="active-link" to="/board-games">
                Restaurant List
              </NavLink>
              <NavLink exact activeClassName="active-link" to="/create">
                Create Page
              </NavLink>
              {/* <NavLink exact activeClassName="active-link" to="/update-restaurants">
                Click on a restaurant to update it
              </NavLink> */}
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </header>
        <main>
          <p>Email: {email}</p>
          <p>Click on a restaurant to update it</p>
          <Switch>
            <Route exact path="/">
              {/* if there is a user, redirect to the board games list. Otherwise, render the auth page. Note that the AuthPage will need a function called setUser that can set the user state in App.js */}
              {token ? (
                <Redirect to="/restaurants" />
              ) : (
                <AuthPage setEmail={setEmail} setToken={setToken} />
              )}
            </Route>
            <Route exact path="/restaurants">
              {/* if there is a user, render the board games list. Otherwise, redirect to the home route/auth page */}
              {token ? <ListRestaurant /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/restaurants/:id">
              {/* if there is a user, render the detail page. Otherwise, redirect to the home route/auth page */}
              {token ? <UpdatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {/* if there is a user, render the create page. Otherwise, redirect to the home route/auth page */}
              {token ? <CreateRestaurant /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
