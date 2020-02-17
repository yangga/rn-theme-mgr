# rn-theme-mgr

Easy to use theme system for react-native

## Installation

```bash
yarn add rn-theme-mgr
```

or

```bash
npm i -S rn-theme-mgr
```

## Setup on your project

```javascript
// @defaultTheme.ts
// desc: declares default theme variables here
export default {
    primaryColor: "#f0f"
    ...
}

// @theme.tsx
// desc: writing code like below
import { initTheme } from "rn-theme-mgr";
import defaultTheme from "./defaultTheme";

const { ThemeProvider, useTheme, StyleSheet: ThemeStyleSheet } = initTheme(
  defaultTheme
);

export { defaultTheme, ThemeProvider, useTheme, ThemeStyleSheet };

// @at your App.tsx
import { ThemeProvider } from "./theme"

...
{
    ...
    <ThemeProvider>
        ... ui codes
    </ThemeProvider>
    ...
}


```

## Usages

### 1. Usage with hooks

```javascript
// @at your some components
import { useTheme } from "./theme"

...
    render() {
        const { theme } = useTheme();

        return (
            <View style={{
                backgroundColor: theme.primaryColor
            }}>
                ...
            </View>
        )
    }
```

### 2. Usage with stylesheet

```javascript
// @at your some components
import { ThemeStyleSheet } from "./theme"

...

const styles = ThemeStyleSheet.create((theme) => ({
    container: {
        backgroundColor: theme.primaryColor
    }
}))

```

### 3. Usage with default variables (static)

```javascript
// @at your some components
import { defaultTheme } from "./theme"

...
    render() {
        return (
            <View style={{
                backgroundColor: defaultTheme.primaryColor
            }}>
                ...
            </View>
        )
    }

```

## Changing theme in realtime

```javascript
// @at your some components
import { useTheme } from "./theme"

...
    render() {
        const { setTheme } = useTheme();

        const newTheme = {
            primaryColor: "red"
        }

        return (
            ...
            <Button onPress={() => {
                setTheme(newTheme);
            }} />
            ...
        )
    }
```
