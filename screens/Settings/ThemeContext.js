// ThemeContext.js
import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}