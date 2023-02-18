const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find((taskItem) => taskItem.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  if (title) {
    task.title = title;
  }
  if (completed !== undefined) {
    task.completed = completed;
  }
  res.status(200).json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
