A ideia da aplicação é ser um armazenador de repositórios.

-> GET ✔️

recebendo a url - /repositories

-> PUT ✔️

recebendo a url - /repositories/:id
title, url, techs, id

-> POST ✔️

recebendo a url - /repositories
title, url, techs
{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }

-> POST LIKE ✔️

recebendo a URL - /repositories/:id/like
like = like + 1

-> DELETE ✔️

recebendo a URL - /repositories/:id
