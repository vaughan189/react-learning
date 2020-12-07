// App.jsx
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import AccountProfile from './AccountProfile';
import AccountProvider from './providers/AccountProvider';

const App = () => (
    <AccountProvider>
        <Router>
            <React.Fragment>
                <NavigationBar />
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => <div>Home</div>}
                    />
                    <Route
                        exact
                        path='/account/profile'
                        component={AccountProfile}
                    />
                </Switch>
            </React.Fragment>
        </Router>
    </AccountProvider>
);
export default App