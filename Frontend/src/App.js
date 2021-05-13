import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end",
  ]);

  useEffect(() => {
    api.get("projects").then(({ data }) => setProjects(data));
  }, []);

  async function handleAddProject() {
    const { data: project } = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      Owner: "Debora Zandonai",
    });

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Teste 1" />

      <ul>
        {projects && projects.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>

      <button type={button} onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
