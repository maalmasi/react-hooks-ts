const initState = {
    authError: null,
    isLoading: false,
};

interface AuthState {
    authError: string;
    isLoading: boolean;
}

let authReducer: (state: any, action: any) => AuthState = function (
    state = initState,
    action: any
) {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed',
                isLoading: false,
            };
        case 'LOGIN_SUCCESS':
            console.log('login');
            return {
                ...state,
                authError: null,
                isLoading: false,
            };
        case 'LOGOUT_SUCCESS':
            console.log('logout');
            return {
                ...state,
                authError: null,
                isLoading: false,
            };
        case 'LOGOUT_ERROR':
            console.log('logout');
            return {
                ...state,
                authError: 'Sign out failed',
                isLoading: false,
            };
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                authError: null,
                isLoading: false,
            };
        case 'CREATE_USER_ERROR':
            return {
                ...state,
                authError: 'User creation failed',
                isLoading: false,
            };
        case 'LOADING_TRUE':
            return {
                ...state,
                isLoading: true,
            };
        case 'LOADING_FALSE':
            console.log('login');
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default authReducer;
