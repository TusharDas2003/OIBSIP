document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById("inputBox");
    const listContainer = document.getElementById("listContainer");
    const addButton = document.getElementById("addButton");

    // Function to format the current time
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleString();
    }

    // Function to add a new todo item
    function addTodo() {
        const taskText = inputBox.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        const timeAdded = document.createElement("div");
        timeAdded.classList.add("time");
        timeAdded.textContent = `Added: ${getCurrentTime()}`;

        li.innerHTML = `${taskText}`;
        li.appendChild(timeAdded);

        const span = document.createElement("span");
        span.textContent = "x";
        li.appendChild(span);

        listContainer.appendChild(li);
        inputBox.value = "";

        saveData();
    }

    // Event listener for Add button
    addButton.addEventListener("click", addTodo);

    // Event listener for Enter key
    inputBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // Event delegation for toggling checked state and removing tasks
    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");

            if (e.target.classList.contains("checked")) {
                const timeCompleted = document.createElement("div");
                timeCompleted.classList.add("time");
                timeCompleted.textContent = `Completed: ${getCurrentTime()}`;
                e.target.appendChild(timeCompleted);
            }
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    // Save list data to localStorage
    function saveData() {
        localStorage.setItem("todoList", listContainer.innerHTML);
    }

    // Load saved data from localStorage
    function loadData() {
        const savedData = localStorage.getItem("todoList");
        if (savedData) {
            listContainer.innerHTML = savedData;
        }
    }

    // Initial load of saved data
    loadData();
});
