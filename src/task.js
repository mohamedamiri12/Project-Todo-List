class Task {
    constructor(taskInfo){
        this.title = taskInfo.title
        this.description = taskInfo.description
        this.dueDate = taskInfo.dueDate
        this.parentProject = taskInfo.parentProject
        this.priority = taskInfo.priority
        this.id = taskInfo.id
        
        if(taskInfo.checked) this.checked = taskInfo.checked
        else this.checked = false
    }
}

export default Task





