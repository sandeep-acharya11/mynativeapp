import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
// import Feedbacks from './src/components/Feedbacks';
import TicTac from './src/components/TicTac';
import Products from './src/components/Products';

// const App: () => React$Node = () => {
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Mahak Bakes
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        {/* <Text style={styles.sectionTitle}>Feedbacks</Text>
        <Feedbacks></Feedbacks>
         */}
        {/* <Text style={styles.sectionTitle}>Tic Tac Toe</Text>
        <Text style={styles.sectionDescription}>2 Player game</Text>
        <TicTac></TicTac> */}
        <Products></Products>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  header: {
    backgroundColor: '#000',
    alignItems:'center',
    padding:10
  },
  headerText:{
    color: "#fff",
    fontFamily: 'Roboto',
    fontSize: 30,
    letterSpacing: 3
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    // backgroundColor: '#eeeeee',
    justifyContent: "center",
    // alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: '800',
    justifyContent: 'center',
    marginTop: 20,
    letterSpacing: 5
    // color: Colors.black,
  },
  sectionDescription: {
    marginBottom: 8,
    fontSize: 14,
    justifyContent: 'center',
    letterSpacing: 2
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
