import React, {useState, useEffect} from 'react';
import useLocalStorage from './useLocalStorage'

const useDarkMode = ({key}) => {
    const [darkMode, setDarkMode] = useLocalStorage(key)
    let bodyTag = document.querySelector('body');
    useEffect(()=
        bodyTag.classList.toggle('dark-mode', darkMode)
    , [])
    return [darkMode, setDarkMode]
};

export default useDarkMode;