const addButton = document.getElementById("Taskbutton");
let addTaskContent = document.getElementById("TaskAdd");

console.log(addButton, addTaskContent);

let Taskmaker = addButton.addEventListener("click", createTask);

function createTask() {
  if (addTaskContent.value !== "") {
    let newDiv = document.createElement("div");
    newDiv.className = "myDiv";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.paddingLeft = "15px";
    newDiv.style.backgroundColor = "white";
    newDiv.style.paddingRight = "15px";
    newDiv.style.paddingTop = "20px";
    newDiv.style.paddingBottom = "20px";
    newDiv.style.borderRadius = "5px";
    newDiv.style.marginTop = "6px";
    newDiv.style.marginBottom = "6px";
    let txt = document.createElement("h2");
    txt.textContent = addTaskContent.value;
    txt.style.fontFamily = "New Amsterdam";
    newDiv.appendChild(txt);
    let newButton = document.createElement("button");
    newButton.style.backgroundColor = "#0a881b";
    newButton.style.border = "none";
    newButton.style.cursor = "pointer";
    newButton.style.borderRadius = "2px";
    newButton.style.paddingLeft = "15px";
    newButton.style.paddingRight = "15px";
    newButton.style.paddingTop = "15px";
    newButton.style.paddingBottom = "15px";
    newButton.onclick = () => {
      newDiv.remove();
    };
    newDiv.appendChild(newButton);
    document.getElementById("Taskdesign").appendChild(newDiv);

    addTaskContent.value = "";
  }
}
