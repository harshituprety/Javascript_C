let prg = document.querySelector('#progressbar')
let h3 = document.querySelector('h3')

count = 0

let int = setInterval(() => {
    if (count === 100) {
        h3.style.opacity = 1
        clearInterval(int)
    }
    count++
    prg.style.width = count + "%"
}, 100);