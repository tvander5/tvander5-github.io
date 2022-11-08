const onAddTodo = (event) => {
    const inputField = event.target.parentNode.querySelector("input")

    if (inputField.value != "") {
        const newListItem = document.createElement("li");
        const text = inputField.value;
        const textNode = document.createTextNode(text);
        
        newListItem.appendChild(textNode);
        document.querySelector("ul").appendChild(newListItem);
        newListItem.addEventListener("click", addCompleted);
        inputField.value = "";
    }
}

const addCompleted = (event) => {
    event.target.classList.toggle('completed');
}

document.querySelector("button").addEventListener("click", onAddTodo);
for (const thisItem of document.querySelectorAll("li")) {
    thisItem.addEventListener("click", addCompleted);
}
