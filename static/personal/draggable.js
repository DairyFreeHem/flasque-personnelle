
var draggableElements = new Map();

const draggableSelector = ".draggable";

// Hold current dragged element
var selectedElement = null;

class windowPos {
    constructor()
    {
        this.pos1 = 0;
        this.pos2 = 0;
        this.pos3 = 0;
        this.pos4 = 0;
    }
}

document.querySelectorAll(draggableSelector).forEach((element) =>
{
    let elementPos = new windowPos();

    const elementId = element.id;

    draggableElements.set(element.id, elementPos);
    
    let titleBar = element.querySelector(".title-bar");
    if (titleBar)
    {
        titleBar.onmousedown = dragMouseDown;
    }
    
});

  function getTitlebarParent(element)
  {
    var draggableParent = element.closest(draggableSelector);
    return draggableParent;
  }

  function getWindowPosObject(element)
  {
    var elementPosition = null;
    if (element)
    {
        const elemId = element.id;
        parentPosition = draggableElements.get(elemId);
    }
    return parentPosition;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    let parent = getTitlebarParent(e.target);
    selectedElement = parent;
    var parentPosition = getWindowPosObject(parent);
    if (parentPosition)
    {
        // get the mouse cursor position at startup:
        parentPosition.pos3 = e.clientX;
        parentPosition.pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
  }

  function elementDrag(e) {
    e = e || window.event;
    // e.preventDefault();
    // calculate the new cursor position:
    
    var parentPosition = getWindowPosObject(selectedElement);
    if (parentPosition && e.clientX > 0 && e.clientY > 0)
    {
        // Get ammount of pixels moved
        parentPosition.pos1 = parentPosition.pos3 - e.clientX;
        parentPosition.pos2 = parentPosition.pos4 - e.clientY;
        // Get new position of pixels
        parentPosition.pos3 = e.clientX;
        parentPosition.pos4 = e.clientY;
        // set the element's new position:
        // selectedElement.style.top = e.clientY + 'px';
        // selectedElement.style.left = e.clientX + 'px';
        selectedElement.style.top = (selectedElement.offsetTop - parentPosition.pos2) + "px";
        console.log("xPos: "+e.clientX);
        console.log("pos1:"+parentPosition.pos1 );
        console.log((selectedElement.offsetLeft - parentPosition.pos1));
        selectedElement.style.left = (selectedElement.offsetLeft - parentPosition.pos1) + "px";
    }
  }

  function closeDragElement() {
    selectedElement = null;
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
