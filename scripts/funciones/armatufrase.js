const phrase = []
const canvasList = document.getElementById('phraseContainer')

//Funcion para armar la frase
const addtophrase = (idPicto) => {

    //Limpia el html para que no se acumulen
    canvasList.innerHTML = ''

    //Localiza el picto y agrega ese objeto a un array nuevo
    let picSelected = arrayData.find((elm) => elm._id === idPicto)
    phrase.push(picSelected)
    console.log(phrase)

    phrase.forEach( (es) => {
        //Agrega al modal los pictos elegidos
        picImg=`https://api.arasaac.org/api/pictograms/${es._id}?download=false`
                    
        // Genera un cuadro donde se ubica el picto, la palabra y descripción, y un botón triggers un modal
        canvasList.innerHTML +=
        `<li class="card col-2">
            <img src=${picImg} class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-centered">${es.keywords[0].keyword}</h5>
            </div>
            <button type="button" class="btn-close text-reset" aria-label="X"></button>
        </li>`
    })

}