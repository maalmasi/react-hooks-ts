const setLoadingFalseAction = () => {
    return async (
        dispatch: (...args: any) => any,
        getState: (...args: any) => any
    ) => {
        dispatch({ type: 'LOADING_FALSE' });
    };
};

export default setLoadingFalseAction;
