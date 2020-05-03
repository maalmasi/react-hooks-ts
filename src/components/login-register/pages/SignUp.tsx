import React from 'react';
import { useForm } from 'react-hook-form';
import { signUpAction } from 'components/login-register/actions';
import { setLoadingTrueAction } from 'common/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

type SignUpForm = {
    email: string;
    password: string;
};

interface SignUpProps {}

interface User {
    email: string;
    password: string;
}

const SignUp: React.FC<SignUpProps> = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<SignUpForm>();
    const onSubmit = (user: User) => {
        dispatch(setLoadingTrueAction());
        dispatch(signUpAction(user));
    };
    const auth = useSelector((state: any) => state.auth);
    const { authError, isLoading } = auth;

    const firebaseAuth = useSelector((state: any) => state.firebase.auth);

    if (firebaseAuth.uid) {
        return <Redirect to="/hidden" />;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="grey lighten-5">
                <h5>Sign Up</h5>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" ref={register} />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" ref={register} />
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

export default SignUp;
