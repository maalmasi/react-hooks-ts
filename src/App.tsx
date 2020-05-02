import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Navbar } from 'components/layout/pages';
import { SignUp, SignIn } from 'components/login-register/pages';
import { HiddenPage } from 'components/hidden-page/pages';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route name="app" path="/">
                    <Navbar />
                    <Route path="/hidden" component={HiddenPage} />
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/sign-in" component={SignIn} />
                </Route>
                <Redirect from="/" to="/sign-in" />
            </div>
        </BrowserRouter>
    );
}

export default App;
