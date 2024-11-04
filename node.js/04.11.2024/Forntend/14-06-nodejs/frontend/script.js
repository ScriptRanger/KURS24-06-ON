function getTodos() {
    fetch('http://127.0.0.1:4000/todos')
        .then(response => response.json())
        .then(json => loadTodos(json))
        .catch(error => console.error('Fehler beim Abrufen der Todos:', error));
}

function loadTodos(todos) {
    console.log(todos);

    // Leere die bestehende Liste, bevor du neue Todos hinzufügst
    document.getElementById('task-list').innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        taskToHtml(todos[i]);
    }
}

function taskToHtml(todo) {
    console.log(todo);

    let taskCompleted = todo.completed;

    // Listenelement erzeugen
    let listItem = document.createElement('li');
    listItem.id = todo.id;
    listItem.setAttribute('userId', todo.userId); // Benutzerdefiniertes Attribut hinzufügen

    // Checkbox erzeugen
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = taskCompleted; // Setze den Status

    // Todo-Text
    let taskText = document.createElement('span');
    taskText.textContent = todo.title + ' ';

    // Button erzeugen
    let delButton = document.createElement('button');
    delButton.textContent = "Delete Task";

    // Event Listener für den Lösch-Button
    delButton.addEventListener('click', () => {
        deleteTask(todo.id); // Lösche das Todo
    });

    // Listenelement ergänzen
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(delButton);

    // Listenelement in die HTML-Liste hinzufügen
    document.getElementById('task-list').appendChild(listItem);
}

function addTask() {
    let taskContent = document.getElementById('userInput').value;
    if (taskContent.trim() === '') {
        alert('Bitte einen Todo-Text eingeben!'); // Warnung, falls das Eingabefeld leer ist
        return;
    }

    document.getElementById('userInput').value = ''; // Eingabefeld leeren

    const fetchConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "title": taskContent,
            "completed": false
        })
    };

    fetch('http://127.0.0.1:4000/todos', fetchConfig) // URL für die POST-Anfrage
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht okay');
            }
            return response.json();
        })
        .then(json => {
            loadTodos(json); // Nach dem Hinzufügen die Todos neu laden
        })
        .catch(error => console.error('Fehler beim Hinzufügen des Todos:', error));
}

// Event Listener für den Hinzufügen-Button
document.getElementById('add-task').addEventListener("click", addTask);

// Hauptfunktion zum Abrufen der Todos
getTodos();

// Funktion zum Löschen eines Todos
function deleteTask(id) {
    fetch(`http://127.0.0.1:4000/todos/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Fehler beim Löschen des Todos');
        }
        getTodos(); // Nach dem Löschen die Todos neu laden
    })
    .catch(error => console.error('Fehler:', error));
}
