import './style.css';
import { addProjectListener, projectFormListener , selectedProjectListener, deleteProjectListener} from './project-listener';
import { addTaskListener, deleteTaskListener, editTaskListener, openTaskListener, taskFormListener,checkboxListener } from './task-listener';
import { displayProjects, displayTasks } from './dom';
import TodoList from './todo-list';

const displayFunction = () =>  {
    //localStorage.clear()
    const todoList = new TodoList(JSON.parse(localStorage.getItem("projects")))

    // dom creations
    displayProjects(todoList);
    displayTasks(todoList)
    
    // event listeners
    addProjectListener(todoList);
    projectFormListener(todoList);
    selectedProjectListener(todoList);
    deleteProjectListener(todoList);
    addTaskListener(todoList);
    taskFormListener(todoList);
    deleteTaskListener(todoList);
    openTaskListener(todoList);
    editTaskListener(todoList);
    checkboxListener(todoList);
}



displayFunction();

