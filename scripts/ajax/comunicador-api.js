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
        
        data.forEach( (el) => {
            lista.innerHTML += `
                <li class="">
                    ${el._id}
                </li>`
        })
    })