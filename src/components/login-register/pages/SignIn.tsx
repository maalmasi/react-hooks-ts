import React from 'react';
import { useForm } from 'react-hook-form';
import { signInAction } from 'components/login-register/actions';
import { setLoadingTrueAction } from 'common/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

type SignInForm = {
    email: string;
    password: string;
};

interface SignInProps {
    signIn: (...args: any) => any;
    setLoadingTrue: (...args: any) => any;
    authError: string;
    isLoading: boolean;
}

const SignIn: React.FC<SignInProps> = () => {
    const { register, handleSubmit, errors } = useForm<SignInForm>();
    const dispatch = useDispatch();
    const onSubmit = (user: object) => {
        dispatch(setLoadingTrueAction());
        dispatch(signInAction(user));
    };
    const auth = useSelector((state: any) => state.auth);
    const firebaseAuth = useSelector((state: any) => state.firebase.auth);
    const { authError, isLoading } = auth;

    if (firebaseAuth.uid) {
        return <Redirect to="/hidden" />;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="grey lighten-5">
                <h5>Sign In</h5>
                <div className="input-field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        ref={register({ required: 'Email is required' })}
                    />
                    {errors && errors.email && (
                        <React.Fragment>{errors.email}</React.Fragment>
                    )}
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        ref={register({ required: true })}
                    />
                </div>
                <input
                    disabled={isLoading}
                    type="submit"
                    className="btn blue darken-3"
                />
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </form>
        </div>
    );
};

export default SignIn;
