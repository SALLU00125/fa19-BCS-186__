import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button, Text, View, TouchableOpacity } from 'react-native';
import React, {useReducer, useState, useEffect} from 'react';
import ShowSS from './ShowScore';

const ARRstr= ['hooks', "11", "False" , "True" , "First-Second-Third", "4" , "5" , "git init" , "Perform Side Effects"  ]
const OptionsARR= [  
['hooks','components','element',""],
["11","1","0", "2"], 
["True","False","",""],
["Yes","No","",""],
["First Second Third","First,Second,Third", "First-Second-Third",""],
["2","4", "5",""],
["2","4", "5", "3"],
["git commit","git init", "git push", "git pull"], 
["Perform Side Effects","Nothing", "Update UI", "Manage State"],
["","","",""],
]; 

const QuestionsARR= [ //question of array
  "In react everything is",
  " '1'  + 1 ",
  "'5.0' = = = 5 ",
  "Is JavaScript case sensitive language ",
  "(['First','Second','Third'].join(' - ')",
  "How many values are available for flexDirection?",
  "How many built-in hooks are available in react-native?",
  "Which command is used to make a directory git enabled?",
  "What is useEffect used for?",

]; 



function reducer (state, action) { //actions selects on different parameters to dispactcher

  switch (action.type) {
    

        case 'selectOpt0': 
            if(ARRstr[state.count]==OptionsARR[state.count][0])
              return( 
                      { count: state.count + 1,
                        score: state.score+1,
                        options: OptionsARR[state.count+1],
                         })
            else
              return(
                      {  count: state.count + 1, 
                        score: state.score,
                        options: OptionsARR[state.count+1],
                       })

      
        case 'selectOpt1': 
        if(ARRstr[state.count]==OptionsARR[state.count][1])
          return( 
                  { count: state.count + 1,
                    score: state.score+1,
                    options: OptionsARR[state.count+1],
                    })
        else
          return(
                  {  count: state.count + 1,
                    score: state.score,
                    options: OptionsARR[state.count+1],
                    })     

      case 'selectOpt2': 
      if(ARRstr[state.count]==OptionsARR[state.count][2])
        return( 
                { count: state.count + 1 ,
                  score: state.score+1,
                  options: OptionsARR[state.count+1],
                  })
      else
        return(
                { count: state.count + 1,
                  score: state.score,
                  options: OptionsARR[state.count+1],
                   })

      case 'selectOpt3': 
      if(ARRstr[state.count]==OptionsARR[state.count][3])
        return( 
                { count: state.count + 1,
                  score: state.score+1,
                  options: OptionsARR[state.count+1],
                   })
      else
        return(
                { count: state.count + 1 ,
                  score: state.score,
                  options: OptionsARR[state.count+1],
                  })

  
          

      
      case 'default':
        return state


  }

};




export default function App() {


  

  const [state, dispatch ] = useReducer( reducer , {count:0 ,score:0,CurrentSelect:0, options: OptionsARR[0] } )
      // Object ,caller to update =      reduceCustom , default Obj



  const ButtonSELECT0 =() =>{  dispatch({type:'selectOpt0'})}
  const ButtonSELECT1 = () => { dispatch({type:'selectOpt0'}) };
  const ButtonSELECT2 = () => { dispatch({type:'selectOpt2'}) };
  const ButtonSELECT3 = () => { dispatch({type:'selectOpt3'})};

  const DISPLAY_top_left_Corner = () => {
    if(state.count<QuestionsARR.length)
      return(<Text style={state.count <= QuestionsARR.length-1?{marginLeft:10,paddingTop:20,justifyContent: 'center', color: 'red' ,fontSize:20}:{color:'lightgray'} }>{state.count}/9</Text>)
    else
    return(<Text style={state.count <= QuestionsARR.length-1?{marginLeft:10,paddingTop:25,justifyContent: 'center', color: 'red' ,fontSize:20}:{marginLeft:10,paddingTop:20,justifyContent: 'center',color:'black',fontSize:20} }>Total Score:{state.score}</Text>)
  }

  const DISABLE_BUTTON=()=>{
    if(state.count>=8)
      return(true)
  else return(false)
  }


  

  
return(

<View style={styles.container}>
    <DISPLAY_top_left_Corner/>
<View Style={{margin:10}} >
    

    
    
</View>
    <View style={styles.container}>
     
     
      <Text style={{fontSize:40}}>{QuestionsARR[state.count]}  </Text>
      <Text style={state.count<QuestionsARR.length?{fontSize:40}:{color:'lightgray'}}>______{"\n"}</Text>
      

     
     {
       state.count >= QuestionsARR.length ? <ShowSS RESULT={state.score}/>: null
     }
     

  <View style={{ flex: 1,flexDirection: "column" ,marginLeft:20, marginTop:10} }>

     <TouchableOpacity style={state.count >= QuestionsARR.length==""?styles.S_BUTTON:styles.S_BUTTON_HIDDEN} onPress={ButtonSELECT0} disabled={false}>
        <Text  style={state.count <= QuestionsARR.length?{fontSize:35}:{fontSize:25,color:'lightgray'}}>{state.options[0]} </Text>
      </TouchableOpacity>

      <View style={{ width:10 , height: 15 } }>
    </View>

     <TouchableOpacity style={state.count >= QuestionsARR.length==""?styles.S_BUTTON:styles.S_BUTTON_HIDDEN} onPress={ButtonSELECT1} disable={DISABLE_BUTTON}>
        <Text  style={state.count <= QuestionsARR.length?{fontSize:35}:{fontSize:25,color:'lightgray'}}>{state.options[1]} </Text>
      </TouchableOpacity>

      <View style={{ width:10 , height: 15 } }>
    </View>
   
      <TouchableOpacity style={state.count >= QuestionsARR.length==""?styles.S_BUTTON:styles.S_BUTTON_HIDDEN} onPress={ButtonSELECT2} disable={DISABLE_BUTTON}>
        <Text  style={state.count <= QuestionsARR.length-1?{fontSize:35,color:'black'}:{fontSize:25,color:'lightgray'}}>{state.options[2]} </Text>
      </TouchableOpacity>

      <View style={{ width:10 , height: 15 } }>
    </View>


      <TouchableOpacity style={state.count >= QuestionsARR.length==""?styles.S_BUTTON:styles.S_BUTTON_HIDDEN} onPress={ButtonSELECT3} disable={DISABLE_BUTTON}>
        <Text  style={state.count <= QuestionsARR.length?{fontSize:35}:{fontSize:25,color:'lightgray'}}>{state.options[3]} </Text>
      </TouchableOpacity>
      

    </View>
  </View>

</View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 25,
    paddingLeft: 15
  },
  con_inner: {
    flex: 1,
    //padding: 20,
    flexDirection: "row"
  },
  S_BUTTON:{
     flexDirection: "row" ,
     backgroundColor: "lightgrey",
     borderWidth: 5,
     color:'white',
     height:40,
     width:300,
     alignItems: 'center',
     justifyContent: 'center',
     alignContent: 'space-between',
     borderRadius: 15,
     flexBasis: 100,
     
    },
  S_BUTTON_HIDDEN:{
    backgroundColor: "lightgrey",
  },
    
   
  
});
