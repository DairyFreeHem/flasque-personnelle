

function setTime()
{
    let timeVar = document.getElementById("time");
    const now = dayjs();

    const time = now.format('HH:mm');
    timeVar.innerHTML = time;

}

setTime();

