const signOutAction = () => {
    return async (
        dispatch: (...args: any) => void,
        getState: (...args: any) => any,
        { getFirebase }: any
    ) => {
        const firebase = getFirebase();

        try {
            await firebase.logout();
            dispatch({ type: 'LOGOUT_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'LOGOUT_ERROR' });
        }
    };
};

export default signOutAction;
