import { displayTasks, generateProjectsList, populateShowTaskModal,populateEditTaskModal } from "./dom"

const addTaskListener = (todoList) =>  {
    const addbutton = document.querySelector(".add-task-button")
    const dialog = document.querySelector(".add-task-modal")
    addbutton.addEventListener("click", (e) => {
        generateProjectsList(todoList);
        dialog.showModal()
    })
}


const taskFormListener = (todoList) => {
    const cancelButton = document.querySelector(".task-close-button")
    const viewTaskcancelButton = document.querySelector(".view-task-close-button")
    const editCancelButton = document.querySelector(".edit-task-close-button")

    const submitButton = document.querySelector(".task-submit-button")
    const editSubmitButton =  document.querySelector(".edit-task-submit-button")


    // modals add, view and edit
    const dialog = document.querySelector(".add-task-modal")
    const viewDialog = document.querySelector(".open-task-modal")
    const editDialog = document.querySelector(".edit-task-modal")

    // forms
    const form = document.querySelector(".task-form")
    const editForm = document.querySelector(".edit-task-form")


    cancelButton.addEventListener("click", (e) => {
        e.preventDefault()
        dialog.close();
    })

    viewTaskcancelButton.addEventListener("click", (e) => {
        e.preventDefault()
        viewDialog.close();
    })

    editCancelButton.addEventListener("click", (e) => {
        console.log("click me")
        e.preventDefault()
        editDialog.close();
    })
    
    submitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        const parentProject = todoList.getProjectByName(Object.fromEntries(formData)['parentProject'])
        parentProject[0].addTask(Object.fromEntries(formData),todoList.getProjects())
        displayTasks(todoList);
        form.reset();
        dialog.close();
    })

    editSubmitButton.addEventListener("click", (e) => {
        e.preventDefault()
        const formData = new FormData(editForm)
        console.log(Object.fromEntries(formData))
        //const parentProject = todoList.getProjectByName(Object.fromEntries(formData)['parentProject'])
        todoList.getProjects().forEach(project => {
            project.getTasks().forEach(task => {
                if(task.id == Object.fromEntries(formData).id) project.editTask(Object.fromEntries(formData),todoList.getProjects())
            })
        });
        displayTasks(todoList);
        editDialog.close();
    })
}



const deleteTaskListener = (todoList) =>  {
    
    const tasks = document.querySelector(".task-content")
    tasks.addEventListener("click", (e) => {
        if(e.target.className == "delete-task"){
            console.log(e.target.previousSibling.innerText)
            const taskToDelete = e.target.parentNode.previousSibling.innerText
            const parentProject = e.target.getAttribute("data-project")
            todoList.getProjectByName(parentProject)[0].removeTask(taskToDelete,todoList.getProjects())
            displayTasks(todoList)
        }
    })
}

const openTaskListener = (todoList) =>  {
    const taskContent = document.querySelector(".task-content")
    const dialog = document.querySelector(".open-task-modal")
    taskContent.addEventListener("click", (e) => {
            if(e.target.className == "task-div" || e.target.tagName == "H2"){
                const parentProject = todoList.getProjectByName(e.target.getAttribute("data-project")) 
                const taskInfo = parentProject[0].getTaskById(e.target.getAttribute("data-id"))
                // populating the modal
                generateProjectsList(todoList);
                populateShowTaskModal(taskInfo);
                dialog.showModal()
            }
        })
}

const editTaskListener = (todoList) =>  {
    const taskContent = document.querySelector(".task-content")
    const dialog = document.querySelector(".edit-task-modal")
    taskContent.addEventListener("click", (e) => {
            if(e.target.className == "edit-task"){
                console.log(e.target)
                const parentProject = todoList.getProjectByName(e.target.getAttribute("data-project")) 
                console.log(parentProject)
                const taskInfo = parentProject[0].getTaskById(e.target.getAttribute("data-id"))
                // populating the modal
                generateProjectsList(todoList);
                populateEditTaskModal(taskInfo);
                dialog.showModal()
            }
        })
}

const checkboxListener = (todoList) => {
    const taskContent = document.querySelector(".task-content")
    taskContent.addEventListener("click", (e) => {
        if(e.target.className == "checkbox"){
            console.log(e.target.checked)
            const parentProject = todoList.getProjectByName(e.target.getAttribute("data-project")) 
            parentProject[0].checkTask(e.target.getAttribute("data-id"),e.target.checked,todoList.getProjects())
        }
    })
}

export { addTaskListener , taskFormListener , deleteTaskListener, openTaskListener, editTaskListener, checkboxListener} ;