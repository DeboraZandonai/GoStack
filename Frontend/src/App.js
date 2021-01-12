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
    api.get("projects").then((response) => {
      setProjects(response.data);
      console.log(response);
    });
  }, []);

  async function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post("projects", {
      title: `Novo projeto ${Date.now()}`,
      Owner: "Debora Zandonai",
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  return (
    <>
      <Header title="Teste 1" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type={button} onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
