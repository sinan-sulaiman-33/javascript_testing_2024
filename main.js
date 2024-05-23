const button = document.querySelector("button");
button.addEvent.Listener("click", updateName);
function updateName(){
  const name = prompt("Enter the new name:");
  button.textContent = "Student-1: ${name}";
}
