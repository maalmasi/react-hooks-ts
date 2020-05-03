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

interface SignInProps {}

interface User {
    email: string;
    password: string;
}

const SignIn: React.FC<SignInProps> = () => {
    const { register, triggerValidation, handleSubmit, errors } = useForm<
        SignInForm
    >();
    const dispatch = useDispatch();
    const onSubmit = (user: User) => {
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
                    <label>
                        Email
                        {errors?.email?.type === 'required' &&
                            ' - Email is required'}
                        {errors?.email?.type === 'pattern' &&
                            ' - Email is not valid'}
                    </label>
                    <input
                        type="email"
                        name="email"
                        ref={register({
                            required: 'Email is required',
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        onChange={() => triggerValidation('email')}
                    />
                </div>
                <div className="input-field">
                    <label>
                        Password
                        {errors?.password?.type === 'required' &&
                            ' - Password is required'}
                        {errors?.password?.type === 'minLength' &&
                            ' - Password should be 6 characters or longer'}
                    </label>
                    <input
                        type="password"
                        name="password"
                        ref={register({
                            required: 'Password is required',
                            minLength: 6,
                        })}
                        onChange={() => triggerValidation('password')}
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
