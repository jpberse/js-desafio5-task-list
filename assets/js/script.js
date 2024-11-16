const inputTask = document.querySelector('#input-tarea');
const btnAgregar = document.querySelector('#btn-agregar');
const totalTasks = document.querySelector('#total-tareas');
const tasksCompletadas = document.querySelector('#total-tareas-completas');
const listaDeTasks = document.querySelector('#task-list');
const checkbox = document.querySelector('#checkbox')

const tasks = [
    { id: 1, task: "Pasear en el parque", isComplete: false },
    { id: 2, task: "Comprar en el supermercado", isComplete: false },
    { id: 3, task: "Lavar el auto", isComplete: false }
]

renderTasks(tasks);

btnAgregar.addEventListener('click', (event) => {
    event.preventDefault()
    const task = inputTask.value.trim()
    if (task === "") {
        alert('Ingresa una tarea valida');
        return;
    }

    let idTask = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    tasks.push({ id: idTask, task: task, isComplete: false })
    inputTask.value = ""

    renderTasks(tasks)
})

const borrarTask = (id) => {
    const index = tasks.findIndex(item => item.id === id )
    tasks.splice(index, 1);
    renderTasks(tasks)
}

/* const ischecked = () {

} */

function renderTasks(tareas) {
    let html = ""

    tareas.forEach((tarea) => {
        html += `
                <div class="span-input-container">
                    <span>${tarea.id}</span>
                    <span>${tarea.task}</span>
                    <input id="checkbox" type="checkbox">
                    <button onclick="borrarTask(${tarea.id})">X</button>
                </div>`;
    })

    listaDeTasks.innerHTML = html;
    totalTasks.innerHTML = tareas.length;
}