import ProjectCard from './ProjectCard'

const ProjectList = ({projArr, setAddBool, addBool}) => {

    const mappedProjects = 
    projArr.map((proj)=> {
        return (
        <div className='cardDeleteContainer' key={proj.id}>
                <ProjectCard key={proj.id} project={proj} setAddBool={setAddBool} addBool={addBool}/>
        </div>
        )
    })

    return(
    <div className="myProjectsSection">
        <h3>My Projects</h3>
        <div className='project-container'>
            {projArr.length !== 0 ? mappedProjects : <h1>No Posts</h1>}
        </div>
        </div>
    )
}

export default ProjectList