import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Navbar } from 'components/layout/pages';
import { SignUp, SignIn } from 'components/login-register/pages';
import { HiddenPage } from 'components/hidden-page/pages';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function AuthIsLoaded({ children }: any) {
    const auth = useSelector((state: any) => state.firebase.auth);
    if (!isLoaded(auth)) return <div>Loading app... Please wait.</div>;
    return children;
}

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <AuthIsLoaded>
                    <Route name="app" path="/">
                        <Navbar />
                        <Route path="/hidden" component={HiddenPage} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/sign-in" component={SignIn} />
                    </Route>
                    <Redirect from="/" to="/sign-in" />
                </AuthIsLoaded>
            </div>
        </BrowserRouter>
    );
}

export default App;
