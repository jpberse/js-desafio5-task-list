const inputTask = document.querySelector('#input-tarea');
const btnAgregar = document.querySelector('#btn-agregar');
const totalTasks = document.querySelector('#total-tareas');
const tasksCompletadas = document.querySelector('#total-tareas-completas');
const listaDeTasks = document.querySelector('#task-list');
const checkbox = document.querySelector('#checkbox')

const tasks = [
    { id: 1, task: "Pasear en el parque", isComplete: false },
    { id: 2, task: "Pagar Cuentas", isComplete: false },
    { id: 3, task: "Lavar el auto", isComplete: false }
]

renderTasks(tasks);
actualizarContadorChecked();

btnAgregar.addEventListener('click', (e) => {
    e.preventDefault()
    const task = inputTask.value.trim()
    if (task === "") {
        alert('Ingresa una tarea valida');
        return;
    }

    let idTask = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    tasks.push({ id: idTask, task: task, isComplete: false })
    inputTask.value = ""

    renderTasks(tasks)
    actualizarContadorChecked()
})

const borrarTask = (id) => {
    const index = tasks.findIndex(item => item.id === id)
    if(tasks[index].iscomplete === true) {
        tasks[index].iscomplete = false
    }
    tasks.splice(index, 1);
    renderTasks(tasks)
    actualizarContadorChecked()
}

const isChecked = (id) => {
    const index = tasks.findIndex(item => item.id === id)
    tasks[index] ? tasks[index].isComplete = !tasks[index].isComplete : 'error'

    actualizarContadorChecked()
}; 


function actualizarContadorChecked() {
    const completeTask = tasks.filter(complete => complete.isComplete === true);
    tasksCompletadas.textContent = completeTask.length;
    totalTasks.textContent = tasks.length;
}

function renderTasks(tareas) {
    let html = ""

    tareas.forEach((tarea) => {
        html += `
                <div class="span-input-container">
                    <span>${tarea.id}</span>
                    <span>${tarea.task}</span>
                    <input id="checkbox" type="checkbox" onchange="isChecked(${tarea.id})"
                        ${tarea.isComplete? "checked" : "" }>
                    <button onclick="borrarTask(${tarea.id})">X</button>
                </div>`;
    })

    listaDeTasks.innerHTML = html;
}