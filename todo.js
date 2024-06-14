function addTask() {
    var taskInput = document.getElementById('new-task');
    var taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    var listItem = document.createElement('li');
    listItem.className = 'todo-item';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    var label = document.createElement('label');
    label.textContent = taskText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    var todoList = document.getElementById('todo-list');
    todoList.appendChild(listItem);

    taskInput.value = '';
}
