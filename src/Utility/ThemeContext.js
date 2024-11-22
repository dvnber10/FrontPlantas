// import React,{ createContext, useState, useEffect} from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) =>{
//     const [isDark, setIsDark] = useState(
//         ()=> JSON.parse(localStorage.getItem('isDark')) || false 
//     );
//     useEffect(()=> {
//         localStorage.setItem('isDark', JSON.stringify(isDark));
//         document.body.className = isDark ? 'dark-mode' : 'light-mode';
//         console.log("isDark:", isDark);
//         console.log("Clase aplicada al body:", document.body.className);
//     }, [isDark]);
    
//     const toogleTheme = () =>{
//         setIsDark((prevMode) => !prevMode);
//     };

//     return (
//         <ThemeContext.Provider value={{isDark, toogleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }