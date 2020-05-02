import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signInAction } from 'components/login-register/actions';

type SignInForm = {
    email: string;
    password: string;
};

interface SignInProps {
    signInAction: Function;
}

const SignIn: React.FC<SignInProps> = (props) => {
    const { register, setValue, handleSubmit, errors } = useForm<SignInForm>();
    const onSubmit = (data: object) => props.signInAction(data);

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="grey lighten-5">
                <h5>Sign In</h5>
                <div className="input-field">
                    <label>Email</label>
                    <input type="email" name="email" ref={register} />
                </div>
                <div className="input-field">
                    <label>Password</label>
                    <input type="password" name="password" ref={register} />
                </div>
                <input type="submit" className="btn blue darken-3" />
            </form>
        </div>
    );
};

export default SignIn;
