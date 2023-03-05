const loginInput = document.querySelector("#login-form input")
const loginForm = document.querySelector("#login-form")
let UserId = ""
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    UserId = loginInput.value;
    document.querySelector("#login").classList.add('hidden')
    console.log(UserId)

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
    
})