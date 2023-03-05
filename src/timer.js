const timeContainer = document.querySelector("#clock")

function timer(){
    const now = new Date()
    console.log(    now.getHours()
    )
    timeContainer.innerText = 
    `${now.getHours()}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`
}
timer()
setInterval(timer,1000)