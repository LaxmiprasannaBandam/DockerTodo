function addTodo() {

    let task = document.getElementById("todoInput").value;

    if (task == "") {
        alert("Enter a task");
    }
    else {
        let li = document.createElement("li");

        li.innerHTML = task;

        document.getElementById("todoList").appendChild(li);

        document.getElementById("todoInput").value = "";
    }
}