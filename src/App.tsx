/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
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

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={'#67FF6D'} />
      <View
        style={{
          height: 90,
          backgroundColor: '#67FF6D',
          justifyContent: 'center',
        }}>
        <Text>Blank</Text>
      </View>
      <View
        for="해더 검정색"
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          height: 38,
          width: '100%',
          backgroundColor: '#67FF6D',
        }}>
        <View style={{flex: 1}}>
          <Text>AAA</Text>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#67FF6D',
              position: 'relative',
            }}>
            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderRightWidth: 35,
                borderTopWidth: 38,
                borderRightColor: 'red',
                borderTopColor: '#67FF6D',
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 1,

                transform: [{rotate: '0deg'}],
              }}
            />
          </View>

          <View style={{flex: 9, backgroundColor: 'black'}}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
