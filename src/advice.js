fetch("https://api.adviceslip.com/advice").then(res=>res.json()).then(
    data => document.querySelector('#quote span:last-child').innerText=(data.slip.advice)
)