import React, {useState} from "react";
import {SafeAreaView, Text, View, StyleSheet, Image, Button, Alert, TouchableHighlight, TouchableOpacity} from "react-native";
import {MD2Colors, TextInput} from "react-native-paper";

import { NavigationContainer } from '@react-navigation/native';

import Details from "./pages/DetailScreen";
import SecondDetails from "./pages/SecondDetailScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Text>Hello world!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details2"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="SecondDetails" component={SecondDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// /*
// export default function App() {
//   return (
//     <SafeAreaView>
//       <Text>
//         Hello world!
//       </Text>
//     </SafeAreaView>
//   );
// }
// */


// // 위와 같은 코드
// // Day1 실습
// /*
// const App = () => {
//   const action = () => {
//     Alert.alert("Pressed!", "Button pressed!", [{text: "Canel"}, {text: "OK"}]);
//   }

//   // foo(10, "foo");
//   return (
//     <SafeAreaView>
//       <View style = {[styles.view, styles.tmp]}>
//         <Text style= {styles.text}>
//           {foo(10, "Hello world!")}
//         </Text>
//       </View>
//       <Button title = "Press me" onPress={action} />
//       <Button title = "Press me" onPress={() => {console.log("Pressed!")}}/>
//       <TouchableHighlight onPress={action}>
//         <Text>Touchable Highlight</Text>
//       </TouchableHighlight>
//       <TouchableOpacity onPress={action}>
//         <Text>Touchable Opacity</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }
// */

// // Day2 실습
// const App = () => {
//   const [value, setValue] = useState(10);
//   // foo(10, "foo");
//   return (
//     <SafeAreaView>
//       {/* <View style = {[styles.view, styles.tmp]}>
//         <Text>
//           Name:
//         </Text>
//         <TextInput
//         onChangeText={(text: string) => {console.log(text);}}
//         placeholder="Enter your name"
//         style = {{borderWidth: 2, borderColor: "black"}}
//         />
//       </View> */}
//       <View style = {styles.view}>
//         <View style = {styles.viewA}></View>
//         <View style = {styles.viewB}>
//           <View style = {styles.viewB1}></View>
//           <View style = {styles.viewB2}>
//             <Text>{value}</Text>
//           </View>
//           <View style = {styles.viewB3}></View>
//         </View>
//         <View style = {styles.viewC}></View>
//         <View style = {styles.viewD}>
//           <View style = {styles.viewD1}></View>
//           <View style = {styles.viewD2}>
//             <TouchableOpacity onPress={() => {setValue((val) => {return val + 1;})}}>
//               <Text>Increase</Text>
//             </TouchableOpacity>
//           </View>
//           <View style = {styles.viewD3}></View>
//         </View>
//         <View style = {styles.viewE}></View>
//       </View>
//     </SafeAreaView>
//   );
// }

// /*
// // 아래와 같은 방법
// function foo(a: number, b: string): string {
//   console.log(b + " " + a);
//   return b + " " + a;
// }
// */

// const foo = (a: number, b: string): string => {
//   console.log(b + " " + a);
//   return b + " " + a;
// }

// const styles = StyleSheet.create({
//   view: {
//     // backgroundColor: MD2Colors.lime200,
//     // borderColor: MD2Colors.lime900,
//     // borderWidth: 2
//     width: "100%",
//     height: "100%",
//   },
//   tmp: {
//     borderRadius: 5
//   },
//   text: {
//     color: MD2Colors.lime500
//   },

//   view1: {
//     position: "absolute",
//     left: "10%",
//     top: "10%",
//     width: "30%",
//     height: "20%",
//     backgroundColor: MD2Colors.indigo100,
//   },
//   view2: {
//     position: "absolute",
//     left: "30%",
//     top: "20%",
//     width: "40%",
//     height: "30%",
//     backgroundColor: MD2Colors.redA100,
//   },
//   viewA: {
//     flex: 1,
//   },
//   viewB: {
//     flex: 2,
//     flexDirection: "row",
//   },
//   viewC: {
//     flex: 1,
//   },
//   viewD: {
//     flex: 3,
//     flexDirection: "row",
//   },
//   viewE: {
//     flex: 3,
//   },
//   viewB1: {
//     flex: 1
//   },
//   viewB2: {
//     flex: 3,
//     backgroundColor: MD2Colors.teal100
//   },
//   viewB3: {
//     flex: 6
//   },
//   viewD1: {
//     flex: 3
//   },
//   viewD2: {
//     flex: 4,
//     backgroundColor: MD2Colors.amber100
//   },
//   viewD3: {
//     flex: 3
//   },
// });

// export default App;