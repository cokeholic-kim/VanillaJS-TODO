const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = [];
let savedToDos

function saveTodos(){
    localStorage.setItem(UserId,JSON.stringify(toDos))
}

function deleteToDo(e){
    const li = e.target.parentElement
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
    saveTodos()
}

function paintTodo(newTodoObj){
    const li = document.createElement('li')
    li.id = newTodoObj.id
    const span = document.createElement('span')
    const button = document.createElement('button')
    button.innerText = "❌"
    button.addEventListener('click',deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    toDoList.appendChild(li)
}

function handleTodoSubmit(e){
    e.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {text:newTodo,id:Date.now()}
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

toDoForm.addEventListener("submit",handleTodoSubmit)
if(UserId){
    savedToDos = localStorage.getItem(UserId);
    if(savedToDos){
        const parsedTodos = JSON.parse(savedToDos)
        toDos = parsedTodos
        parsedTodos.forEach(newTodo => {
            paintTodo(newTodo)
        });
    }
}
