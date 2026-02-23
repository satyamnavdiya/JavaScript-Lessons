const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const ul = document.querySelector("#taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// ✅ Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// charAt --> Select Letter into your Text

// ✅ Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ✅ Render tasks
function renderTasks() {
    ul.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" ${task.done ? "checked" : ""}>
            <span class="${task.done ? "line" : ""}">${task.text}</span>
            <button class="delete">delete</button>
        `;

        ul.appendChild(li);
    });
}

// ✅ Add task
addBtn.addEventListener("click", () => {
    let value = input.value.trim();
    if (!value) return;

    value = capitalizeFirst(value);

    tasks.push({
        text: value,
        done: false
    });

    saveTasks();
    renderTasks();
    input.value = "";
});

// trim --> remove Space Before and After 

// ✅ Event delegation (checkbox + delete)
ul.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    const index = [...ul.children].indexOf(li);

    // checkbox toggle
    if (e.target.type === "checkbox") {
        tasks[index].done = e.target.checked;
    }

    // delete task
    if (e.target.classList.contains("delete")) {
        tasks.splice(index, 1);
    }

    saveTasks();
    renderTasks();
});

// initial load
renderTasks();




// let ul = document.querySelector("ul");

// ul.addEventListener("change", (e) => {
//   if (e.target.classList.contains("check")) {
//     e.target.parentElement.classList.toggle("line", e.target.checked);
//   }
// });

