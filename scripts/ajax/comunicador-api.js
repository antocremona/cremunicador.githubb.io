// Conexión con API con vainilla JS
const lang = 'es'
const lista = document.getElementById('lista')
const lookUpForm = document.getElementById('lookUpForm')

// let lookUpWord = 'pelota'

const buscarPic = () => {
    const lookUpWord = document.getElementById('lookUp').value

    //Conexión con la API de pictogramas
    fetch(`https://api.arasaac.org/api/pictograms/${lang}/search/${lookUpWord}`)
    .then( (res) => res.json())
    .then( (data) => {

        console.log(data)

        //Array para recolectar los id de las imágenes
        let pictos = []

        //Recorro el array obtenido en la API para pushear los ids dentro del array nuevo
        data.forEach( (el) => {
            pictos.push(el._id)
            console.log(pictos)
        })

        //Recorro el array nuevo con los ids para localizar las imágenes y appendearlas en el html
        pictos.forEach( (picId) => {
            let picImg=`https://api.arasaac.org/api/pictograms/${picId}?download=false`

            console.log(picImg)
            lista.innerHTML +=
            `<li class="card col-3">
                <img src=${picImg} />
            </li>`
        })

        //Aca tendria que vaciar el array y/o armar uno nuevo con el pictograma que se elija
    })
}

lookUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    buscarPic()
})