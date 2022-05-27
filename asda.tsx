// import { Text, StyleSheet, View, SafeAreaView, Button } from "react-native";
// import React, { Component } from "react";

// export default class Asda extends Component {
//   state = {
//     name: "Esra",
//   };
//   render() {
//     return (
//       <SafeAreaView>
//         <Text>{this.state.name}</Text>
//         <Button title="Change name" onPress={()=> this.setState({
//             name: 'Bora'
//         })} />
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({});
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Asda = () => {
  const [name, setname] = useState("Esra");
  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <Button title="Change name" onPress={()=> setname('bora')}  />
    </SafeAreaView>
  );
};

export default Asda;

const styles = StyleSheet.create({});
