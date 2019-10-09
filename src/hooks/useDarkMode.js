import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = ({key}) => {
    const [darkMode, setDarkMode] = useLocalStorage(key)
    let bodyTag = document.querySelector('body');
    useEffect(()=>
        bodyTag.classList.toggle('dark-mode', darkMode)
    , [darkMode, bodyTag.classList])
    return [darkMode, setDarkMode]
};

export default useDarkMode;