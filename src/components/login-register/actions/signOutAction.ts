const signOutAction = () => {
    return async (
        dispatch: (...args: any) => void,
        getState: (...args: any) => any,
        { getFirebase }: any
    ) => {
        try {
            const firebase = getFirebase();
            await firebase.logout();
            dispatch({ type: 'LOGOUT_SUCCESS' });
        } catch (err) {
            dispatch({ type: 'LOGOUT_ERROR' });
        }
    };
};

export default signOutAction;
