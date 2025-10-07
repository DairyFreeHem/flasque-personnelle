

function setTime()
{
    let timeVar = document.getElementById("time");
    const date = new Date();
    const time = date.getHours() + ":" + date.getUTCMinutes();
    timeVar.innerHTML = time;

}

setTime();