import { createContext, useReducer} from "react";



const initialState = {
    projects: [],
    components: [],
    showModel: false,
    showAddProject: false,
    currComp: {}
}


const ProjectContext = createContext()

const ProjectContextProvider = props => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'GET_ALL':
                return {...state, projects: action.payload}
            case 'SHOW_MODEL':
                return {...state, showModel: !state.showModel}
            case 'CURR_COMP':
                return {...state, currComp: action.payload}
            case 'SHOW_ADD_PROJECT':
                return {state, showAddProject: !state.showAddProject}
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