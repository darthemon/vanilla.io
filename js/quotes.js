const quotes = [
{
    quote: "This ends now",
    author: "SOJOURN : Overclock",
},
{
    quote: "Time for the Reckoning",
    author: "JUNKER QUENN : Rampage",
},
{
    quote: "Apagando las luces",
    author: "SOMBRA : Electromagnetic Pulse",
},
{
    quote: "HAMMER DOWN!",
    author: "REINHARDT : Earthshatter",
},
{
    quote: "It's high noon",
    author: "CASSIDY : Deadeye",
},
{
    quote: "No one can hide from my sight",
    author: "WIDOWMAKER : Infra-sight",
},
]

const colors = [
    {
        name: "seoul dynasty",
        main: "#aa8a00",
        sub: "#000000",
    },
    {
        name: "overwatch 2",
        main: "#ea6716",
        sub: "#343e47",
    },
    {
        name: "seoul infernal",
        main: "#e2002d",
        sub: "#caaa77",
    },
    {
        name: "dallas fuel",
        main: "#0072ce",
        sub: "#0c2340",
    },
    {
        name: "hangzhou spark",
        main: "#fa7298",
        sub: "#5788cd",
    },
    {
        name: "toronto defiant",
        main: "#000000",
        sub: "#c10021",
    },
    {
        name: "newyork excelsior",
        main: "#0f57ea",
        sub: "#171c38",
    },
    {
        name: "shanghai dragons",
        main: "#d22730",
        sub: "#fce300",
    },
    {
        name: "LA gladiators",
        main: "#381360",
        sub: "#000000",
    },
    {
        name: "SF shock",
        main: "#a5acaf",
        sub: "#fc4b02",
    },
    {
        name: "atlanta reign",
        main: "#c4c4c4",
        sub: "#910f1b",
    },
    {
        name: "houston outraws",
        main: "#000000",
        sub: "#97d700",
    },
    {
        name: "van titans",
        main: "#09226b",
        sub: "#2fb228",
    },
    {
        name: "washington justice",
        main: "#990034",
        sub: "#003669",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todays = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todays.quote;
author.innerText = todays.author;

const theTeam = colors[Math.floor(Math.random() * colors.length)];

quote.style.background = theTeam.main;
author.style.background = theTeam.sub;