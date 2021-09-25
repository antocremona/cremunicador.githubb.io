//Variables para linkear con el DOM
const lang = ''
const lista = document.getElementById('lista')
const lookUpForm = document.getElementById('lookUpForm')
const lookUpBtn = document.getElementById('btnBuscar')
const lookUpWord = document.getElementById('lookUp')

// Conexión con API con vainilla JS
const buscarPic = (lookUpWord) => {
    //Valido si se ingreso un dato para buscar
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
                let picDesc = (el.keywords[0].meaning === undefined) ? 'Descripción no disponible' : el.keywords[0].meaning

                //Fuente >> GET /pictograms/{idPictogram}
                let picImg=`https://api.arasaac.org/api/pictograms/${el._id}?download=false`
                
                lista.innerHTML +=
                `<li class="card col-2">
                    <img src=${picImg} class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${el.keywords[0].keyword}</h5>
                        <p class="card-text">${picDesc}</p>
                        <button onclick="addtophrase(${el._id})" class="btn btn-primary">Agregar</button>
                </li>`
            })
        })
    }
}

lookUpForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let lang = listLang.value
    buscarPic(lookUpWord.value)
})