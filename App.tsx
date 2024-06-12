/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { MyButton, randomNumber, succeeded } from './src/components/myButtons'
import { useState } from 'react'
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [count, setCount] = useState(Math.floor(Math.random() * 101))
  const [top, setTop] = useState(101);
  const [bottom, setBottom] = useState(0);

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text> The number you are thinking of is: {count} </Text>

      <MyButton type="Higher" action={(() => {
        setBottom(count);
        setCount(randomNumber(count, top));
      })} />

      <MyButton type="Lower" action={(() => {
        setTop(count);
        setCount(randomNumber(bottom, count));
      })} />

      <MyButton type="Found it!" action={() => succeeded()} />

      <MyButton type="Reset" action={() => {
        setTop(101);
        setBottom(0);
        setCount(Math.floor(Math.random() * 101));
      }} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
