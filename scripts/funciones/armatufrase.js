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
    renderPhrase(phrase)

}