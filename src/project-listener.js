import { displayProjects, highlightProject , generateDelete, displayTasks} from "./dom"
const addProjectListener = (todoList) =>  {
    const addbutton = document.querySelector(".add-project-button")
    const dialog = document.querySelector(".add-project-modal")
    addbutton.addEventListener("click", (e) => {
        dialog.showModal();
        e.stopImmediatePropagation();
       } 
    )
}

const projectFormListener = (todoList) => {
    const cancelButton = document.querySelector(".close-button")
    const submitButton = document.querySelector(".submit-button")
    const dialog = document.querySelector(".add-project-modal")
    const form = document.querySelector(".form")

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault()
        dialog.close();
    })
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        todoList.addProject(Object.fromEntries(formData))
        displayTasks(todoList);
        displayProjects(todoList);
        dialog.close();
    })
}

const selectedProjectListener = (todoList) => {
    const projectsList = document.querySelector(".left-content")
    projectsList.addEventListener("click", (e) => {
        console.log("switch should happen")
        console.log(e.target)
        if(e.target.innerText != "Projects"){
            todoList.selectProject(e.target.getAttribute("data-name"))
            highlightProject(e.target.getAttribute("data-name"))
            generateDelete(e.target.getAttribute("data-name"))
            displayTasks(todoList);
        }
        })
}

const deleteProjectListener = (todoList) =>  {
    const projects = document.querySelector(".projects")
    projects.addEventListener("click", (e) => {
        if(e.target.parentNode.className == "delete"){
            console.log(e.target.parentNode)
            const projectToDelete = e.target.parentNode.previousSibling.innerText
            todoList.removeProject(projectToDelete)
            displayProjects(todoList)
        }
    })
}



export { addProjectListener, projectFormListener, selectedProjectListener, deleteProjectListener};
