import { User } from 'common/types';

const signInAction = (user: User) => {
    return async (
        dispatch: (...args: any) => void,
        getState: (...args: any) => any,
        { getFirebase }: any
    ) => {
        try {
            const firebase = getFirebase();
            await firebase.login({
                email: user.email,
                password: user.password,
            });
            dispatch({ type: 'LOGIN_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'LOGIN_ERROR', err });
        }
    };
};

export default signInAction;
