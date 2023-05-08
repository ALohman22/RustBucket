import { createContext, useReducer} from "react";

const initialState = {
    showAddComponent: false,
    toggle: true,
    screenView: 'home',
  
}

const ComponentContext = createContext()

const ComponentContextProvider = props => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'ADD_COMPONENT_TOGGLE':
                return {...state, showAddComponent: !state.showAddComponent}
            case 'PAGE_REFRESH':
                return {...state, toggle: !state.toggle}
            case 'TOGGLE':
                return {...state, screenView: action.payload}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ComponentContext.Provider value={{state, dispatch}}>
            {props.children}
        </ComponentContext.Provider>
    )

}

export {ComponentContextProvider}
export default ComponentContext