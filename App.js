import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';
const axios = require('axios');


export default class App extends Component {
 handlerBtn(){
 
  axios.get("https://www.amiiboapi.com/api/amiibo", {params:{name:this.state.nombre}})
  .then( response => {
    console.log(response.data);
    this.setState(()=>{return {consulteApi:true, data1: response.data.amiibo[0].name,
      data2: response.data.amiibo[0].amiiboSeries}});
  })
  .catch( error => {
    console.log(error);
  });

   console.log("Me clickearon");
 }
  
 handlerTxt(text){
   console.log("Escribieron" + text);
   this.setState({nombre:text});

 }  


  render(){
  return (
                <View style={styles.container}>
                 
                  <TextInput
                      style={{ height: 40, borderColor: 'gray', borderWidth: 1, width:200 }}
                      onChangeText={text =>  this.handlerTxt(text)}
                       />
                  <Button
                     onPress={this.handlerBtn.bind(this)}
                     title="Consultar API"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"/>


 


                </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
