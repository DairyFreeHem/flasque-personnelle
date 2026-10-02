    let menuHTML = `
            <div class="main-window draggable" id="{window_id}" onmousedown="setToForefront('{window_id}')" style="top: 253px; left: -27px;">
        <div class="w-100 h-100 d-flex flex-column window-3d">

            <div class="title-bar">
                <div class="title-bar-text">
                    <img src="/static/personal/assets/icons/stock_person_16.png">
                    <b>{window_name}</b>
                </div>
            <div class="title-bar-controls">
                <button aria-label="Close" tabindex="-1" disabled=""></button>
            </div>
            </div>
            <div class="control-bar-parent">
            <div class="control-bar d-flex flex-column w-100 h-100">

                <div class="app-tooltip d-flex flex-row">
                <div class="divide"></div>
                <div class="tooltips">
                    <div class="dropdown">
                    <button class="dropdown-toggle" type="button" id="tooltip-help-btn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span><span class="underline">H</span>elp</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="tooltip-help-btn">
                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#aboutModal">About</a>
                    </div>
                    </div>
                </div>
                <div class="tooltips-logo d-flex align-items-center justify-content-center">
                    <img src="/static/personal/assets/icons/emblem-web-16.png">
                </div>
                </div>
                <div class="address-bar d-flex flex-row w-100 align-items-center">
                <div class="divide"></div>
                <span> Address </span>
                <div class="field-border d-flex w-100">
                    <div class="field-text w-100">
                    <img src="/static/personal/assets/icons/stock_person_16.png">
                    <span>R:/</span>
                    </div>
                    <div class="field-dropdown"><img src="/static/node_modules/98.css/icon/button-down.svg"></div>
                </div>
                </div>
            </div>
            </div>

            <div class="main-content-head w-100 h-100">
            <div class="main-content w-100 h-100">
                <div class="main-content-content d-flex flex-row h-100 w-100">
                <div class="main-content-left w-25 h-100">
                    <div class="d-flex flex-column align-items-center w-100 h-100">
                    <div class=" main-content-left-title">
                        <div class="w-100">
                        <img src="/static/personal/assets/icons/stock_person_48.png" alt="">
                        </div>
                        <div class="w-100">
                        <h1>
                            Hi! I'm Rem
                        </h1>
                        <h3> I build things </h3>
                        </div>
                    </div>
                    <div class="line d-flex flex-row">
                        <div class="red w-25"></div>
                        <div class="yellow w-25"></div>
                        <div class="green w-25"></div>
                        <div class="blue w-25"></div>
                    </div>
                    <div class="main-content-left-subtitle w-100 h-100">
                        <p>Welcome to My website, inspired by Windows 98 and made with ❤️ using HTML,CSS,JS and a little bit of Python sprinkled on the backend🐍.</p>
                    </div>
                    </div>
                </div>
                <div class="main-content-right w-75 h-100">
                    <div class="w-100 h-100">
                    <div class="container">
                        <div class="row">
                        <div class="content-item col-3 col-md-3">
                        <a href="https://www.linkedin.com/in/rem-m-4932bb215/">
                            <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <img src="/static/personal/assets/icons/people-globe.png" alt="">
                                <p>My LinkedIn</p>
                            </div>
                        </a>
                        </div>
                        <div class="content-item col-3 col-md-3">
                        <a href="https://github.com/DairyFreeHem">
                            <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <img src="/static/personal/assets/icons/visual-studio-32.png" alt="">
                                <p>My github</p>
                            </div>
                        </a>
                        </div>
                        <div class="content-item col-3 col-md-3">
                        <a href="mailto:rem@machna.ch">
                            <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <img src="/static/personal/assets/icons/mail-message-new-64.png" alt="">
                                <p>Mail me</p>
                            </div>
                        </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    `;

function callNewMenu(name)
{
    const backgroundWindow = document.getElementById("desktop-window");
    let newMenu = menuHTML;
    newMenu = newMenu.replace("{window_name}",name);
    newMenu = newMenu.replaceAll("{widnow_id}",crypto.randomUUID());

    backgroundWindow.insertAdjacentHTML("beforeend", newMenu);
    queryAllSelectables();
}

function setToForefront(clickedId)
{
    document.querySelectorAll('.main-window').forEach((element) =>
    {
        const p = document.getElementById(element.id);
        if(element.id === clickedId)
        {
            p.style.zIndex= 101;
        }
        else
        {
            p.style.zIndex = 99;
        }
    });
}