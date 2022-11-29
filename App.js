/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * @author hungphan2001
 */

import { useState } from 'react';
import { ScrollView, Text, StatusBar, StyleSheet, Switch, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import {myColors} from './src/styles/Colors';
 const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>
      <StatusBar styles="auto"></StatusBar>
      <Switch
        value={theme === 'dark'}
        onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
