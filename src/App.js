import { useState } from "react";
import { Main } from "./components";

import { themes } from "./constants";

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    if (currentTheme === "dark") {
      setTheme(themes.light);
      setCurrentTheme("light");
    } else {
      setTheme(themes.dark);
      setCurrentTheme("dark");
    }
  };

  return (
    <Main theme={theme} changeTheme={changeTheme} currentTheme={currentTheme} />
  );
}

export default App;
