const setLoadingTrueAction = () => {
    return async (
        dispatch: (...args: any) => any,
        getState: (...args: any) => any
    ) => {
        dispatch({ type: 'LOADING_TRUE' });
    };
};

export default setLoadingTrueAction;
