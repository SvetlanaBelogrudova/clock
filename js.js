let paragraph = document.getElementById('clock');

//the first variant
/*
func = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    paragraph.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
    window.timerId = setInterval(func, 1000);
}

addZero = (value) => {
    if (value <= 9) {
        return '0' + value;
    } else {
        return value;
    }
}
func();*/

//the second variant
func = () => {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    paragraph.innerHTML = hours + ':' + minutes + ':' + seconds;
    window.timerId = setInterval(func, 1000);
}

func();