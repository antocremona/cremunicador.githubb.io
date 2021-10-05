//Funcion quitar pictogramas de la frase
const removePict = (idPicto) => {

    //Limpia el html para que no se acumulen
    canvasList.innerHTML = ''

    //Localiza el picto y agrega ese objeto a un array nuevo
    let picSelected = arrayData.find((elm) => elm._id === idPicto)
    phrase.pop(picSelected)
    console.log(phrase)
    renderPhrase(phrase)
}