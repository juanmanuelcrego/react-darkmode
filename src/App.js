import React from 'react';
import {ReactComponent as Logo } from './logo.svg'

import { ThemeProvider } from 'styled-components';
import { DarkMode } from './components/darkMode';
import { light, dark } from './components/themes';
import { GlobalStyles } from './components/global';

import Toggle from './components/toggle';

function App() {
  const [theme, toggleTheme, componentMounted] = DarkMode();
  const themeMode = theme === 'light' ? light : dark;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>jCrego {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
        <Logo className="logo" />
      </>
    </ThemeProvider>
  );
};

export default App;