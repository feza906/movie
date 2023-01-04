import {createContext,useContext,useEffect, useReducer, useState} from 'react';
import axios from 'axios';

const AppContext = createContext();

const API = 'https://api.tvmaze.com/shows';

const initialState = {
    Shows: [],
    isLoading: false,
    isError: false,
    SingleShow: {},
}

const reducer = (state,action) => {
    switch(action.type){
        case 'LOADING':
            return{
                ...state,
                isLoading: true,
            }
        case 'API_DATA':
            return{
                ...state,
                Shows:action.payload,
                isLoading:false,
                isError:false,
            
            }
        case 'SINGLE_SHOW_API':
            return{
                ...state,
                isLoading:false,
                isError:false,
                SingleShow:action.payload,
            }
        case 'ERROR':
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        default:
            return state;
        
    }
}

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const getShows = async(url) => {
        dispatch({type:'LOADING'})
        try {
            const res = await axios.get(url);
            const shows = await res.data;
            dispatch({type:'API_DATA', payload:shows});
        } catch (error) {
            dispatch({type:'ERROR'})
        }
        
    }
    
    useEffect(() => {
        getShows(API);
    },[])

    const getSingleShow = async(url) => {
        dispatch({type: 'LOADING'})
        try {
        const res = await axios.get(url);
        const singleShow = await res.data;
        console.log(singleShow);
        dispatch({type: 'SINGLE_SHOW_API',payload:singleShow})
        
        } catch (error) {
        dispatch({type: 'ERROR'});
            
        }
        
    }

    return<AppContext.Provider value={{...state,getSingleShow}}>
        {children}
    </AppContext.Provider>
}
const useGlobal = () => {
    return useContext(AppContext);
}

export {AppProvider,AppContext,useGlobal}