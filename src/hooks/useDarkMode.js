
import useLocalStorage from './useLocalStorage'


const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('your key here');


    return [ someValue, useLocalStorage ];
}