import { User } from 'common/types';

const signUpAction = (user: User) => {
    return async (
        dispatch: (...args: any) => void,
        getState: (...args: any) => any,
        { getFirebase }: any
    ) => {
        try {
            const firebase = getFirebase();
            await firebase.createUser({
                email: user.email,
                password: user.password,
            });
            dispatch({ type: 'CREATE_USER_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'CREATE_USER_ERROR', err });
        }
    };
};

export default signUpAction;
