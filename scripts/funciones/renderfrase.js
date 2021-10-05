//Renderizado de la frase
const renderPhrase = (phrase) => {
    phrase.forEach( (es) => {
        //Agrega al modal los pictos elegidos
        picImg=`https://api.arasaac.org/api/pictograms/${es._id}?download=false`
                    
        // Genera un cuadro donde se ubica el picto, la palabra y descripción, y un botón triggers un modal
        canvasList.innerHTML +=
        `<li class="card col-2 h-75 w-auto">
            <img src=${picImg} class="card-img-top h-75 w-75">
            <div class="card-body">
                <h5 class="card-title text-centered">${es.keywords[0].keyword}</h5>
            </div>
            <button type="button" onclick="removePict(${es._id})" class="btn-close text-reset" aria-label="Close"></button>
        </li>`
    })
}