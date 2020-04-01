const express = require("express");
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2317/2317963.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2728/2728973.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br",
    },

    {
        img: "https://image.flaticon.com/icons/svg/1830/1830774.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br",
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br",
    },
]


server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", function(request, response) {
    
    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea);
        }
    }

    return response.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(request, response) {
    const reversedIdeas = [...ideas].reverse();

    return response.render("ideias.html", { ideas: reversedIdeas});
});

server.listen(3000);