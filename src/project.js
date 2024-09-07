import Task from "./task"
class Project {
    constructor(projectInfo){
        this.title = projectInfo.title
        this.description = projectInfo.description
        this.tasks = []
        if(projectInfo.tasks){
            projectInfo.tasks.forEach(task => {
                this.tasks.push(new Task(task))
            });
        }
    }

    getTasks(){
        return this.tasks
    }

    // get specific project by name
    getTaskById(taskId){
        let task = this.tasks.filter((task) => task.id == taskId)
        return task
    }

    addTask(taskInfo, projects) {
        // adding a unique id to tasks for editing purposes
        taskInfo.id = Math.random()
        console.log(taskInfo)
        this.tasks.push(new Task(taskInfo))
        localStorage.setItem("projects",JSON.stringify(projects))
        console.log(JSON.parse(localStorage.getItem("projects")))
    }

    removeTask(removedTask, projects){
        this.tasks = this.tasks.filter((task) => task.title != removedTask)
        localStorage.setItem("projects",JSON.stringify(projects))
    }

    editTask(task,projects){
        let newtask = task
        newtask.id = Number(task.id)
        console.log(this.tasks)
        this.tasks = this.tasks.map( task => {
            if(task.id == newtask.id) return new Task(newtask)
            else return task
        }
        )
        console.log(this.tasks)
        localStorage.setItem("projects",JSON.stringify(projects))
    }
    
    checkTask(id,check,projects){
        this.tasks.forEach(task => { if(task.id == id) task.checked = check})
        localStorage.setItem("projects",JSON.stringify(projects))
    }
}
export default Project