import React from 'react';


const useLocalStorage = () => {
    if (JSON.parse(window.localStorage.getItem('darkmode'))){
        return true
    }
    else{
        return false
    };
};

export default useLocalStorage;