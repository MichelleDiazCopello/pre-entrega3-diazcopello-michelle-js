const fecha = new Date()
console.log(fecha)

const productos = [
    {
        id: 1,
        producto: "Vivienda 1",
        categoria: "Familiar",
        precio: 15000,
    },
    {
        id: 2,
        producto: "Vivienda 2",
        categoria: "Familiar",
        precio: 14000,
    },    
    {
        id: 3,
        producto: "Vivienda 3",
        categoria: "Familiar",
        precio: 19000,
    },    
    {
        id: 4,
        producto: "Vivienda 4",
        categoria: "Familiar",
        precio: 25000,
    },    {
        id: 5,
        producto: "Vivienda 5",
        categoria: "Familiar",
        precio: 17000,
    },    {
        id: 6,
        producto: "Vivienda 6",
        categoria: "Parejas",
        precio: 12000,
    },    {
        id: 7,
        producto: "Vivienda 7",
        categoria: "Parejas",
        precio: 15000,
    },    {
        id: 8,
        producto: "Vivienda 8",
        categoria: "Parejas",
        precio: 12000,
    },    {
        id: 9,
        producto: "Vivienda 9",
        categoria: "Parejas",
        precio: 18000,
    },    {
        id: 10,
        producto: "Vivienda 10",
        categoria: "Parejas",
        precio: 22000,
    },
]

const unidadesContainer = document.querySelector ("#unidades-container");

const unidadesAHtml = (array) => {

    const cards = array.reduce ( (acc, element) => {
        return acc + `
        <div class="card" id="card-${element.id}">
            <button class="button-card" id="button-${element.id}">
            <i class="fa-solid fa-star"></i>
        </button>       
        <h2>
            ${element.producto}
        </h2>
        <figure class="container-card">
            <img src= media/paisaje1.jpg alt="imagen de la ${element.producto}" width="150px" height="150px">
        </figure>
        <h4>
            Tipo de Vivienda: ${element.categoria}
        </h4>
        </div>
    `
    }, "")

    unidadesContainer.innerHTML = cards
}

unidadesAHtml (productos);
