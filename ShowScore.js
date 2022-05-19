import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native';
import React, {useReducer, useState, useEffect} from 'react';


const ShowSS = (props) => {
    return(
        <View style={styles.SScontainer}>
        <Text style={{fontSize:30,color:'darkgray',fontWeight:'bold'}}>Top Users</Text>
        <View style={{width:10,height:20,marginTop:20}}></View>
        <Text style={{ color:'black' }}>Yo: {props.RESULT} out of 10</Text>
        </View>
    )


}

export default ShowSS;


const styles = StyleSheet.create({
    SScontainer:{
    flex: 1,
    backgroundColor: 'lightgray',
    
    paddingTop: 25,
    paddingLeft: 15}

    });
