const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const tasks = [];


app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(req.params.id)) {
      res.status(200).json(tasks[i]);
      return;
    }
  }
  res.status(404).json({ message: 'Task not found' });
});

app.put('/tasks/:id', (req, res) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(req.params.id)) {
      tasks[i].title = req.body.title;
      tasks[i].description = req.body.description;
      tasks[i].status = req.body.status;
      res.status(200).json(tasks[i]);
      return;
    }
  }
  res.status(404).json({ message: 'Task not found' });
});

app.delete('/tasks/:id', (req, res) => {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === parseInt(req.params.id)) {
      tasks.splice(i, 1);
      res.sendStatus(204);
      return;
    }
  }
  res.status(404).json({ message: 'Task not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
