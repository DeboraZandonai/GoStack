const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const { isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.send(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(repository);

  return response.status(200).send(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const { title, url, techs } = request.body;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found." });
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: 0,
  };

  repositories[repositoryIndex] = repository;
  return response.status(200).send(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const index = repositories.findIndex((repository) => repository.id == id);
  if (index < 0) {
    return response.status(400).json({ error: "Repository not found." });
  }

  repositories.splice(index, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: "Repository not found." });
  }

  const { title, url, techs, likes } = repositories[repositoryIndex];

  const repository = {
    id: repositories[repositoryIndex].id,
    title: title,
    url: url,
    techs: techs,
    likes: likes + 1,
  };

  console.log(repository);

  repositories[repositoryIndex] = repository;

  return response.status(200).send(repository);
});

module.exports = app;
