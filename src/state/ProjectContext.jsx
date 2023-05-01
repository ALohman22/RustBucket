import { createContext, useReducer} from "react";
import axios from 'axios'



const initialState = {
    projects: [],
    components: []
}


const ProjectContext = createContext()

const ProjectContextProvider = props => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'GET_ALL':
                return {...state, projects: action.payload}
            // case 'ADD_PROJECT':
            //     return {...state, projects: [...state.projects, action.payload]}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ProjectContext.Provider value={{state, dispatch}}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export {ProjectContextProvider}
export default ProjectContext