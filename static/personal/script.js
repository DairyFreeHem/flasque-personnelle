const oneMinuteInMs = 60000;
function startTime()
{
    setInterval(setTime,oneMinuteInMs);
    setTime();
}

function setTime()
{
    let timeVar = document.getElementById("time");
    const now = dayjs();

    const time = now.format('HH:mm');
    timeVar.innerHTML = time;

}

setTime();

document.querySelectorAll(".app-tooltip .tooltips .dropdown button").forEach((toolTipItem) => 
{
    toolTipItem.addEventListener("click",function(){
        const toolTipWindow = toolTipItem.parentElement.querySelector(".dropdown-menu.show");
        if (toolTipWindow === null )
        {
            return;
        }
        setTimeout(300);
        const maxHeight = toolTipWindow.getBoundingClientRect().height;
        let id = null;
        clearInterval(id);
        let pos = 0;
        id = setInterval(() =>
        {
            if(pos >= maxHeight)
            {
                clearInterval(id);
            }
            else
            {
                pos += 2;
                toolTipWindow.style.height = pos + 'px';
            }

        },2 );

    });
});


document.body.onload = () =>
{
    let timeVar = document.getElementById("time");
    const remainingMS = (oneMinuteInMs - (dayjs().second() * 1000) + (dayjs().millisecond()));
    setTimeout(startTime,remainingMS);
};