import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = ({key}) => {
    const [darkMode, setDarkMode] = useLocalStorage(key)
    return (
        <div>
            
        </div>
    );
};

export default useDarkMode;