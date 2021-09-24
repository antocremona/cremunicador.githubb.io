// Conexión con API con vainilla JS
const lang = 'es'
const lista = document.getElementById('lista')
const lookUpForm = document.getElementById('lookUpForm')
const lookUpWord = document.getElementById('lookUp')

// let lookUpWord = 'pelota'

const buscarPic = (lookUpWord) => {
    if(lookUpWord===''){
        console.log('Debe ingresar una palabra')
        lista.innerHTML +=
        `<h3>Debe ingresar una palabra clave</h3>`
    } else {
        //Conexión con la API de pictogramas
        //Endpoint usado > GET /pictograms/{locale}/search/{searchText}
        fetch(`https://api.arasaac.org/api/pictograms/${lang}/search/${lookUpWord}`)
        .then( (res) => res.json())
        .then( (data) => {

            console.log(data)

            //Limpia el html para que no se acumulen
            lista.innerHTML = ''

            //Recorro el array para localizar las imágenes y appendearlas en el html
            data.forEach( (el) => {
                console.log(el.keywords[0].keyword)

                //Fuente >> GET /pictograms/{idPictogram}
                let picImg=`https://api.arasaac.org/api/pictograms/${el._id}?download=false`
                
                lista.innerHTML +=
                `<li class="card col-2">
                    <img src=${picImg} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${el.keywords[0].keyword}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                </li>`
                
            })
        })
    }
}

lookUpForm.addEventListener('submit', (e) => {
    e.preventDefault()

    buscarPic(lookUpWord.value)
})