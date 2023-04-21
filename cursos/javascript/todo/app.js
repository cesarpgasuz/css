import { saveTask, getTasks } from "./firestore.js";

window.addEventListener('DOMContentLoaded', async () => {
    
    const querySnapshot = await getTasks();
    
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    });
})

const taskForm = document.querySelector('#task-form');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['task-title'];
    const description = taskForm['task-description'];

    saveTask(title.value, description.value);

    taskForm.reset();
})

