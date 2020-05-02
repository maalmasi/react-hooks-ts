import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { signUpAction } from 'components/login-register/actions';

type SignUpForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

interface SignUpProps {
    signUpAction: Function;
}

const SignUp: React.FC<SignUpProps> = (props) => {
    const { register, setValue, handleSubmit, errors } = useForm<SignUpForm>();
    const onSubmit = (data: object) => props.signUpAction(data);

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="grey lighten-5">
                <h5>Sign Up</h5>
                <div className="input-field">
                    <label>First Name</label>
                    <input type="text" name="firstName" ref={register} />
                </div>
                <div className="input-field">
                    <label>Last Name</label>
                    <input type="text" name="lastName" ref={register} />
                </div>
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

export default SignUp;
