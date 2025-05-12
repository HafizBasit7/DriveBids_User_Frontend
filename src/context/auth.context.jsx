import { createContext, useContext, useEffect, useReducer } from "react";
import {getUser, loginUser, signupUser} from "../api/calls/auth";
import { removeAuthToken, setAuthToken } from "../api/client";


//State
const intialState = {
    isLoading: true, 
    isAuthenticated: false, 
    user: null, 
    selectedLocation: null, 
    title: null, 
    searchOpen: false,
    currency: 'AED' // Default currency
};

const authReducerFunction = (state, action) => {
    switch(action.type) {
        case 'updateLocation': {
            let currency = 'AED';
            if (action.payload?.name?.toLowerCase().includes('kuwait')) {
                currency = 'KWD';
            } else if (action.payload?.name?.toLowerCase().includes('united kingdom')) {
                currency = 'GBP';
            } 
            
            return {
                ...state,
                selectedLocation: action.payload,
                currency: currency
            };
        }
        case 'setSearchOpen': {
            return {
                ...state,
                searchOpen: action.payload,
            };
        }
        case 'updateTitle': {
            return {
                ...state,
                title: action.payload,
            };
        }
        case 'toggleLoading': {
            return {
                ...state,
                isLoading: action.payload,
            };
        }
        case 'setUser': {
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        }
        case 'logout': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        }
        default: {
            return state;
        }
    }
};

//Context
const AuthContext = createContext({
    authState: intialState, 
    login: async (payload) => {}, 
    logoutUser: async () => {}, 
    dispatch: () => {}
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider ({children}) {
    const [authState, dispatch] = useReducer(authReducerFunction, intialState);

    //First Time Load
    useEffect(() => {
        if(authState.isLoading) {
            initialLoad();
        }
    }, []);

    useEffect(() => {
        if(authState.user) {
            dispatch({type: 'updateLocation', payload: authState.user.location});
        }
    }, [authState.user]);

    //Initial
    const loadUser = async (token) => {
        setAuthToken(token);
        const user = await getUser(); 
        dispatch({type: 'setUser', payload: user.data}); 
    };

    //Login
    const login = async (payload) => {
        const user = await loginUser(payload);
        const userData = user.data;

        setAuthToken(userData.token);
        dispatch({type: 'setUser', payload: userData.user});
    };

    //Logout
    const logoutUser = () => {
        dispatch({type: 'logout'});
        removeAuthToken();
    };

    //Initially Load user
    const initialLoad = async () => {
        try {
            const token = localStorage.getItem('token');
            if(token) {
                await loadUser(token);
            }
        }
        catch(e) {
            console.log(e.toString());
        } finally {
            //Toggle Loading
            dispatch({type: 'toggleLoading', payload: false});
        }
    };

    return (
        <AuthContext.Provider value={{authState, login, logoutUser, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
};