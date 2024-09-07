import Project from "./project";
class TodoList {
    constructor(projects){
        this.projects = []
        if(projects){
            projects.forEach(project => {
                this.addProject(project)
            });
        }
        this.selectedProject =  "All Tasks"
    }

    // projects getter
    getProjects(){
        return this.projects
    }

    // get specific project by name
    getProjectByName(projectName){
        let project = this.projects.filter((project) => project.title == projectName)
        return project
    }

    addProject(projectInfo){
        this.projects.push(new Project(projectInfo))
        localStorage.setItem("projects",JSON.stringify(this.projects))
    }
    

    removeProject(removedProjectName){
        this.projects = this.projects.filter((project) => project.title != removedProjectName)
        localStorage.setItem("projects",JSON.stringify(this.projects))
    }

    selectProject(project){
        this.selectedProject = project
    }
    
    getSelectedProject(){
        return this.selectedProject
    }
    

}

export default TodoList;