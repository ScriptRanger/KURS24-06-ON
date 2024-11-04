import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const server = express();
const PORT = 4000;

// Middleware
server.use(cors());
server.use(express.json()); // Middleware zum Parsen von JSON

// Manuelle Definition von __dirname
const __dirname = path.resolve();

// Route zum Abrufen der Todos
server.get("/todos", (req, res) => {
    fs.readFile(path.join(__dirname, 'todos.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Fehler beim Lesen der Datei');
        }
        res.json(JSON.parse(data)); // Parse die JSON-Daten und sende sie zurück
    });
});

// Route zum Hinzufügen eines neuen Todos
server.post("/todos", (req, res) => {
    const newTodo = req.body;

    fs.readFile(path.join(__dirname, 'todos.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Fehler beim Lesen der Datei');
        }

        const todos = JSON.parse(data);
        newTodo.id = todos.length ? todos[todos.length - 1].id + 1 : 1; // Neue ID generieren
        todos.push(newTodo);

        fs.writeFile(path.join(__dirname, 'todos.json'), JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Fehler beim Speichern der Datei');
            }
            res.status(201).send(newTodo); // Rückgabe der neuen Todo
        });
    });
});

// Route zum Löschen eines Todos
server.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile(path.join(__dirname, 'todos.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Fehler beim Lesen der Datei');
        }

        let todos = JSON.parse(data);
        todos = todos.filter(todo => todo.id !== id); // Filtere das Todo mit der gegebenen ID heraus

        fs.writeFile(path.join(__dirname, 'todos.json'), JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Fehler beim Speichern der Datei');
            }
            res.status(204).send(); // Erfolgreich, ohne Inhalt zurückzugeben
        });
    });
});

console.log("Server Online");
server.listen(PORT);
