import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BackgroundTimer from 'react-native-background-timer';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Learn More</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

BackgroundTimer.runBackgroundTimer(() => {
  //code that will be called every 3 seconds
  console.log('hello : ', new Date());
}, 5000);
//rest of code will be performing for iOS on background too

BackgroundTimer.stopBackgroundTimer(); //after this call all code on background stop run.

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
