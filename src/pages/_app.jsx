import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

import Navbar from "@/components/layout/Navbar";
import "../app/globals.css";

function App({ Component, pageProps: { pageProps } }) {
  //set theme
  const [themeMode, setThemeMode] = useState("light");

  const handleThemeChange = (newMode) => {
    setThemeMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setThemeMode(storedTheme);
  }, []);

  return (
    <Provider store={store}>
      <Navbar themeMode={themeMode} onThemeChange={handleThemeChange} />
      <Component themeMode={themeMode} {...pageProps} />
    </Provider>
  );
}

export default App;
