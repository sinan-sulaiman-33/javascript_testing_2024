const button = document.querySelector("button");
button.addEventListener("click", updateName);
function updateName(){
  const name = prompt("Enter the new name:");
  button.textContent = `Student-1: ${name}`;
}
