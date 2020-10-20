import React,{useReducer} from "react"


export const ColorContext = React.createContext({})

export const UPDATE_COLOR = "UPDATE_COLOR";

const reducer1 = (state,action)=>{
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = (props:any) =>{
    const [color,dispatch] = useReducer(reducer1,'green')
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}
