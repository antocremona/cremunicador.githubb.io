// Conexión con API mediante JQuery
// let idPictogram = 15

// $.get('https://api.arasaac.org/api/pictograms/es/search/pelota', (rsp) => {
//     console.log(rsp)
// })

// "https://api.arasaac.org/api/pictograms/2377?plural=true&color=true&backgroundColor=808080&url=true&download=false"

// Conexión con API con vainilla JS
const lang = 'es'
const lista = document.getElementById('lista')
// const lookUpWord = document.getElementById('lookUp').value

let lookUpWord = 'pelota'

fetch(`https://api.arasaac.org/api/pictograms/${lang}/search/${lookUpWord}`)
    .then( (res) => res.json())
    .then( (data) => {

        console.log(data)
        pictos = []

        data.forEach( (el) => {
            pictos.push(el._id)
            console.log(pictos)
        })

        pictos.forEach( (picId) => {
            let picImg=`https://api.arasaac.org/api/pictograms/${picId}?download=false`

            console.log(picImg)
            lista.innerHTML +=
            `<li class="card col-3">
                <img src=${picImg} />
            </li>`
        })
    })