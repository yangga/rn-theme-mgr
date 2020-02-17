import React from "react";
import {
  StyleSheet as RNStyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle
} from "react-native";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function initTheme<TypeTheme>(defaultTheme: TypeTheme) {
  const temp: any = {
    theme: defaultTheme,
    setTheme: (_: TypeTheme) => {}
  };
  const ThemeContext = React.createContext(temp);

  const ThemeProvider = (props: any) => {
    const _reducer = (
      state: TypeTheme = defaultTheme,
      newState: TypeTheme
    ) => ({
      ...state,
      ...newState
    });
    const [theme, themeDispatch] = React.useReducer(_reducer, defaultTheme);
    const setTheme = (newTheme: TypeTheme) => themeDispatch(newTheme);

    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
  };
  const useTheme = (): {
    theme: TypeTheme;
    setTheme: (newTheme: TypeTheme) => void;
  } => React.useContext(ThemeContext);

  const StyleSheet = {
    create<T extends NamedStyles<T> | NamedStyles<any>>(
      dispatcher: (theme: TypeTheme) => T | NamedStyles<T>
    ): T {
      return RNStyleSheet.create(dispatcher(defaultTheme));
    }
  };

  return {
    ThemeProvider,
    useTheme,
    StyleSheet
  };
}
