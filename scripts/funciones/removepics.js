//Funcion quitar pictogramas de la frase
const removePict = (idPicto) => {

    //Limpia el html para que no se acumulen
    canvasList.innerHTML = ''

    //Localiza el picto y agrega ese objeto a un array nuevo
    let picSelected = phrase.find((elm) => elm._id === idPicto)
    let position = phrase.indexOf(picSelected)

    // console.log(position)
    phrase.splice(position,1)
    console.log(phrase)
    renderPhrase(phrase)
}