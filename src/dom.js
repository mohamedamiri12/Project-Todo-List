import deleteImage from "./icons/delete.svg";


// projects list dom creation
const displayProjects = (todoList) =>  {
    console.log(todoList)
    const projects = document.querySelector(".projects")
    projects.innerHTML = ""
    todoList.getProjects().forEach(project => {
        const projectDiv = document.createElement("div")
        projectDiv.classList.add("project-card")
        projectDiv.setAttribute("data-name",project.title)

        const projectHeader = document.createElement("h3")
        projectHeader.textContent = project.title
        projectHeader.setAttribute("data-name",project.title)

        // create a delete button
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete")
        const img = document.createElement("img")
        img.src = deleteImage
        deleteButton.append(img)
        deleteButton.hidden = true
        

        projectDiv.append(projectHeader,deleteButton)
        projects.append(projectDiv)
 
    });
}

// highlight active project
const highlightProject = (dataset) => {
    if (dataset) {
        // get the projects list by using dataset selector
        let projects = []
        document.querySelectorAll(`[data-name]`).forEach(element => {
            if(element.className != "project-card") {
                projects.push(element)
            }
        })
        //projects = projects.filter(element => element.className != )
        // get the active project
        const activeProject = Array.from(projects).filter((project) => project.innerText == dataset)
        // get the unactive projects
        const unactiveProjects = Array.from(projects).filter((project) => project.innerText != dataset)

        // highlight the active in blue and others in base white
        activeProject[0].parentNode.style.backgroundColor = "lightblue"
        activeProject[0].parentNode.classList.add("highlightproject")
        unactiveProjects.forEach(project => {
            project.parentNode.style.backgroundColor = "white"
            project.parentNode.classList.remove("highlightproject")
    })   
    }
}

// show delete button to delete current project
const generateDelete = (dataset) => {
    // get the projects list by using dataset selector
    let projects = []
    document.querySelectorAll(`[data-name]`).forEach(element => {
        if(element.className != "project-card") {
            projects.push(element)
        }
    })
    if (dataset && dataset != "All Tasks") {
        const activeProject = Array.from(projects).filter((project) => project.innerText == dataset)
        const deleteButton = activeProject[0].lastChild;
        console.log(deleteButton)
        console.log(activeProject[0].lastChild)
        deleteButton.hidden = false
        
        // get the unactive projects
        const unactiveProjects = Array.from(projects).filter((project) => project.innerText != dataset)

        // highlight the active in blue and others in base white
        unactiveProjects.forEach(project => {
           if(project.nextElementSibling) project.nextElementSibling.hidden = true
        })   
    } else if(dataset == "All Tasks"){
        projects.forEach((project) => {if(project.nextElementSibling)  project.nextElementSibling.hidden = true}  )
    }
}


// display project list in add task modal
const generateProjectsList = (todoList) => {
    const projectInputs = document.querySelectorAll(".parent-project")
    projectInputs.forEach(projectInput => {
        projectInput.innerHTML = ''
        const options = todoList.getProjects().map(project => project.title)
        options.forEach(option => {
            const optionTag = document.createElement("option")
            optionTag.innerText = option
            projectInput.append(optionTag)
        })
    });
}


// display tasks
const displayTasks = (todoList) =>  {
    
    const tasks = document.querySelector(".task-content")
    tasks.innerHTML = ""
    todoList.getProjects().forEach(project => {
        console.log(todoList.getSelectedProject())
        if(project.title == todoList.getSelectedProject() || todoList.getSelectedProject() == "All Tasks"){
            console.log("hello")
            project.getTasks().forEach((task) => {
            
                const taskDiv = document.createElement('div')
                taskDiv.classList.add("task-div")
                taskDiv.setAttribute("data-project",project.title)
                taskDiv.setAttribute("data-id",task.id)
    
                
                // check task creation
                const check = document.createElement("input")
                check.type = "checkbox"
                check.classList.add("checkbox")
                check.setAttribute("data-project",project.title)
                check.setAttribute("data-id",task.id)
                check.checked = task.checked
    
                // task title header creation
                const taskHeader = document.createElement("h2")
                taskHeader.innerText = task.title
                taskHeader.setAttribute("data-project",project.title)
                taskHeader.setAttribute("data-id",task.id)
                
                
                // task left content div
                const titleDiv = document.createElement("div")
                titleDiv.classList.add("title-div")
                titleDiv.append(check,taskHeader)
    
                // create task date element
                const dueDate = document.createElement("p")
                dueDate.textContent = task.dueDate
                // create an edit button
                const editButton = document.createElement("button")
                editButton.classList.add("edit-task")
                editButton.innerText = "Edit"
                editButton.setAttribute("data-project",project.title)
                editButton.setAttribute("data-id",task.id)
    
                // create a delete button
                const deleteButton = document.createElement("button")
                deleteButton.classList.add("delete-task")
                deleteButton.innerText = "Delete"
                deleteButton.setAttribute("data-project",project.title)
    
                const buttonsDiv = document.createElement("div")
                buttonsDiv.classList.add("buttons-div")
                buttonsDiv.append(dueDate,editButton,deleteButton)
                
    
                taskDiv.append(titleDiv,buttonsDiv)
                tasks.append(taskDiv)
            })
        }
    });
}

// populate task modal
const populateShowTaskModal = (taskInfo) => {
    document.querySelector("#show-title").value = taskInfo[0].title
    document.querySelector("#show-description").value = taskInfo[0].description
    document.querySelector("#show-due-date").value = taskInfo[0].dueDate
    document.querySelector("#show-parent-project").value = taskInfo[0].parentProject
    document.querySelector("#show-priority").value = taskInfo[0].priority
}


// populate task modal
const populateEditTaskModal = (taskInfo) => {
    console.log(taskInfo)
    document.querySelector("#edit-task-id").value = taskInfo[0].id
    document.querySelector("#edit-task-title").value = taskInfo[0].title
    document.querySelector("#edit-task-description").value = taskInfo[0].description
    document.querySelector("#edit-due-date").value = taskInfo[0].dueDate
    document.querySelector("#edit-parent-project").value = taskInfo[0].parentProject
    document.querySelector("#edit-priority").value = taskInfo[0].priority
}

export { displayProjects , highlightProject, generateDelete, generateProjectsList, displayTasks, populateShowTaskModal, populateEditTaskModal};