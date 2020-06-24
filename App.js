import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/routes/drawer'
// import Feedbacks from './src/components/Feedbacks';

// import TicTac from './src/components/TicTac';
// import Products from './src/components/Products';

// const Drawer = createDrawerNavigator();
const App = () => {
  return (

    <Navigator></Navigator>

  );
};


// const styles = StyleSheet.create({
//   scrollView: {
//     // backgroundColor: Colors.lighter,
//     marginHorizontal: 20,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   header: {
//     backgroundColor: '#f79aaa',
//     alignItems: 'center',
//     padding: 10
//   },
//   headerText: {
//     color: "#fff",
//     fontFamily: 'Roboto',
//     fontSize: 30,
//     letterSpacing: 3
//   },
//   body: {
//     // backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 10,
//     // marginHorizontal
//     paddingHorizontal: 10,
//     // backgroundColor: '#eeeeee',
//     // justifyContent: "center",
//     // alignItems: 'center'
//   },
//   sectionTitle: {
//     fontSize: 40,
//     fontWeight: '800',
//     justifyContent: 'center',
//     marginTop: 20,
//     letterSpacing: 5
//     // color: Colors.black,
//   },
//   sectionDescription: {
//     marginBottom: 8,
//     fontSize: 14,
//     justifyContent: 'center',
//     letterSpacing: 2
//     // color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     // color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
