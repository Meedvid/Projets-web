let addTask = document.getElementsByClassName("addTask");
let tache;

function addTasks() {
  tache = document.createElement('div');
  tache.contener.style.width = ('30em');
  tache.contener.style.height = ('3em')
  inputvalue = document.getElementById("Tinput");
  inpuaddition = inputvalue.value;
  tache.innerText = inpuaddition;
}