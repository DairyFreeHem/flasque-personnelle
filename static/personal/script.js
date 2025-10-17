const oneMinuteInMs = 60000;

// Delay time refresh until a new minute starts
// from when the user entered the site
function startTime()
{
    setInterval(setTime,oneMinuteInMs);
    setTime(); // Set time for the first time
}

// Set time in taskbar
function setTime()
{
    let timeVar = document.getElementById("time");
    const now = dayjs();

    const time = now.format('HH:mm');
    timeVar.innerHTML = time;

}

setTime();


// Add delay animation to tooltip items
// to simulate Windows 98 tooltip press
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


// Initialze data on load
document.body.onload = () =>
{
    let timeVar = document.getElementById("time");
    const remainingMS = (oneMinuteInMs - (dayjs().second() * 1000) + (dayjs().millisecond()));
    setTimeout(startTime,remainingMS);
};