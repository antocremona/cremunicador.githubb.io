
let id = 1

const urlPokeApi = 'https://pokeapi.co/api/v2/pokemon/'

$('.pokeboton').click( ()=> {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, (rsp) => {

    id++

        $('.pokemon').append(`
        <div class="col">
            <div class="card">
                <img src=${rsp.sprites.front_default} class="card-img-top" alt="pokephoto">
                <div class="card-body bg-light">
                    <h5 class="card-title">${rsp.name}</h5>
                    <p class="card-text">${rsp.order}</p>
                </div>
            </div>
        </div>
        `)

    })
})

