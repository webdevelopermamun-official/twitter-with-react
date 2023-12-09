import { useState } from "react";
import IsDarkModeContext from "../context/IsDarkModeContext";

import "./style.scss"

const IsDarkModeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)


  return <IsDarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        {children}
      </div>
  </IsDarkModeContext.Provider>;
}

export default IsDarkModeProvider



