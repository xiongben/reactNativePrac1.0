import React,{useContext} from "react"

import {ColorContext,UPDATE_COLOR} from './color';
import {
    View,
    Text,
    Button,
} from 'react-native';


const ColorButtons = (props:any) =>{
    const colorContext = useContext(ColorContext)
    const dispatch = colorContext.dispatch

    function _pressfn(data){
        console.log("====dianji=====")
        dispatch({type:UPDATE_COLOR,color:data})
    }
    return (
      <View>
          <Button title="red color" onPress={()=>_pressfn("red")}></Button>
          <Button title="blue color" onPress={()=>_pressfn("blue")}></Button>
      </View>
    )
}

export default ColorButtons
