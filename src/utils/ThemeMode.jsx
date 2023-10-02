import React from 'react';

const ThemeMode = () => {
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setThemeMode(storedTheme);
  }, []);

  const handleThemeChange = (newMode) => {
    setThemeMode(newMode);
    localStorage.setItem('theme', newMode);
  };
  return <div>ThemeMode</div>;
};

export default ThemeMode;
