import {useTheme} from '../context/ThemeContext';

const ThemeToggle =() =>{
    const {toggleTheme} = useTheme();

    return <button onClick={toggleTheme}>Toggle Switch Theme</button>;
};

export default ThemeToggle;